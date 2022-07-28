import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {API_USER_AUTH, API_USER_LOGIN, API_USER_REGISTER} from '../../../utils/api.utils';
import {LoginRequestModel} from '../../../models/api/login-request.model';
import {RegisterRequestModel} from '../../../models/api/register-request.model';
import {AuthResponseModel} from '../../../models/api/auth.model';
import {LoginResponseModel} from '../../../models/api/login-response.model';
import {RegisterResponseModel} from '../../../models/api/register-response.model';

@Injectable()
export class AuthService {
    public isUserLoggedIn: boolean = false;

    public constructor(private apiService: ApiService) {}

    public async login(data: LoginRequestModel): Promise<boolean> {
        const response = await this.apiService.post<LoginResponseModel>(API_USER_LOGIN, data);
        if (!response) return false;

        localStorage.setItem('token', response.token);
        this.isUserLoggedIn = true;
        return true;
    }

    public async register(data: RegisterRequestModel): Promise<boolean> {
        const response = await this.apiService.post<RegisterResponseModel>(API_USER_REGISTER, data);
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

    public async auth(): Promise<void> {
        const token = localStorage.getItem('token') || '';
        const response = await this.apiService.post<AuthResponseModel>(API_USER_AUTH, {token}, {}, false);
        this.isUserLoggedIn = !!response?.id;
    }
}
