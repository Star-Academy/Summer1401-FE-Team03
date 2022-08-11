import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {API_USER_AUTH, API_USER_LOGIN, API_USER_ONE, API_USER_REGISTER} from '../../../utils/api.utils';
import {LoginRequestModel} from '../../../models/api/login/login-request.model';
import {RegisterRequestModel} from '../../../models/api/register/register-request.model';
import {AuthResponseModel} from '../../../models/api/auth/auth-response.model';
import {TokenObjectModel} from '../../../models/api/token-object.model';
import {Router} from '@angular/router';
import {User} from '../../../models/user.model';
import {GetUserResponseModel} from '../../../models/api/get-user/get-user-response.model';

@Injectable()
export class AuthService {
    public isUserLoggedIn: boolean = false;
    public cachedUserId: number | null = null;
    public cachedUser: User | null = null;

    public constructor(private router: Router, private apiService: ApiService) {}

    public async login(data: LoginRequestModel): Promise<boolean> {
        const response = await this.apiService.PostRequest<TokenObjectModel>({body: data, url: API_USER_LOGIN});
        if (!response) return false;

        await this.saveCache(response.token, true, response.id);
        return true;
    }

    public async register(data: RegisterRequestModel): Promise<boolean> {
        const response = await this.apiService.PostRequest<TokenObjectModel>({body: data, url: API_USER_REGISTER});
        if (!response) return false;

        await this.saveCache(response.token, true, response.id);
        return true;
    }

    public async logout(): Promise<void> {
        localStorage.removeItem('token');
        this.isUserLoggedIn = false;
        await this.router.navigateByUrl('/');
    }

    public async fetchLoggedInUserInfo(): Promise<User | null> {
        const response = await this.apiService.GetRequest<GetUserResponseModel>({
            url: `${API_USER_ONE}/${this.cachedUserId}`,
        });
        return response?.user || null;
    }

    public async auth(): Promise<void> {
        const token = localStorage.getItem('token') || '';
        const response = await this.apiService.PostRequest<AuthResponseModel>({
            url: API_USER_AUTH,
            body: {token: token},
            showSnackbarOnFail: false,
        });
        this.isUserLoggedIn = !!response?.id;
    }

    private async saveCache(token: string | null, isLoggedIn: boolean, userId: number | null): Promise<void> {
        if (!!token) localStorage.setItem('token', token);
        else localStorage.removeItem('token');

        this.isUserLoggedIn = isLoggedIn;
        this.cachedUserId = userId;

        if (this.cachedUserId) this.cachedUser = await this.fetchLoggedInUserInfo();
    }
}
