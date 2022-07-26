import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import TokenObject from '../../../models/token-object.model';
import {API_USER_LOGIN} from '../../../utils/api.utils';
import Login from '../../../models/login.model';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public constructor(private apiService: ApiService) {}

    public async login(loginModel: Login): Promise<boolean> {
        const response = await this.apiService.post<TokenObject>(API_USER_LOGIN, loginModel);
        if (!response) return false;

        localStorage.setItem('token', response.token);
        return true;
    }
    // public register();
    // public isLoggedIn();
}
