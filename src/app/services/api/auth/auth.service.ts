import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {API_USER_AUTH, API_USER_LOGIN, API_USER_REGISTER} from '../../../utils/api.utils';
import {LoginRequestModel} from '../../../models/api/login-request.model';
import {RegisterRequestModel} from '../../../models/api/register-request.model';
import {AuthResponseModel} from '../../../models/api/auth.model';
import {LoginResponseModel} from '../../../models/api/login-response.model';
import {RegisterResponseModel} from '../../../models/api/register-response.model';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
    public isUserLoggedIn: boolean = false;

    public constructor(private router: Router, private apiService: ApiService) {}

    public async login(data: LoginRequestModel): Promise<boolean> {
        const response = await this.apiService.PostRequest<LoginResponseModel>({body: data, url: API_USER_LOGIN});
        if (!response) return false;

        localStorage.setItem('token', response.token);
        this.isUserLoggedIn = true;
        return true;
    }

    public async register(data: RegisterRequestModel): Promise<boolean> {
        const response = await this.apiService.PostRequest<RegisterResponseModel>({body: data, url: API_USER_REGISTER});
        if (!response) return false;

        localStorage.setItem('token', response.token);
        this.isUserLoggedIn = true;
        return true;
    }

    public async logout(): Promise<void> {
        localStorage.removeItem('token');
        this.isUserLoggedIn = false;
        await this.router.navigateByUrl('/');
    }

    public async auth(): Promise<void> {
        const token = localStorage.getItem('token') || '';
        const response = await this.apiService.PostRequest<AuthResponseModel>({
            url: API_USER_AUTH,
            body: {token: token},
        });
        this.isUserLoggedIn = !!response?.id;
    }
}
