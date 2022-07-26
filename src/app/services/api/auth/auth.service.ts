import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {TokenObject} from '../../../models/token-object.model';
import {API_USER_AUTH, API_USER_LOGIN, API_USER_REGISTER} from '../../../utils/api.utils';
import {Login} from '../../../models/login.model';
import {User} from '../../../models/user.model';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public isUserLoggedIn: boolean = false;

    public constructor(private apiService: ApiService) {}

    public async login(loginModel: Login): Promise<boolean> {
        const response = await this.apiService.post<TokenObject>(API_USER_LOGIN, loginModel);
        if (!response) return false;

        localStorage.setItem('token', response.token);
        this.isUserLoggedIn = true;
        return true;
    }

    public async register(user: User): Promise<boolean> {
        const response = await this.apiService.post<TokenObject>(API_USER_REGISTER, user);
        if (!response) return false;

        localStorage.setItem('token', response.token);
        this.isUserLoggedIn = true;
        return true;
    }

    public logout(): void {
        localStorage.removeItem('token');
        this.isUserLoggedIn = false;
        window.location.reload();
    }

    public async isLoggedIn(): Promise<void> {
        const token = localStorage.getItem('token') || '';
        this.isUserLoggedIn = !!(await this.apiService.post<boolean>(API_USER_AUTH, {token}, {}, false));
    }
}
