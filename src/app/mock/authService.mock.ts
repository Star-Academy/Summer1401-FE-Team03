import {LoginRequestModel} from '../models/api/login/login-request.model';
import {RegisterRequestModel} from '../models/api/register/register-request.model';

export class AuthServiceMock {
    public isUserLoggedIn: boolean = false;

    public async login(data: LoginRequestModel): Promise<boolean> {
        this.isUserLoggedIn = true;

        return true;
    }

    public async logout(): Promise<void> {
        this.isUserLoggedIn = false;
    }
}
