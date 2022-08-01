import {LoginRequestModel} from '../models/api/login-request.model';
import {RegisterRequestModel} from '../models/api/register-request.model';

export class AuthServiceMock {
    public isUserLoggedIn: boolean = false;

    public login(data: LoginRequestModel): Promise<boolean> {
        console.log('login called');

        this.isUserLoggedIn = true;

        return new Promise<boolean>((resolve, reject) => {
            resolve(true);
        });
    }

    public register(data: RegisterRequestModel): Promise<boolean> {
        console.log('login called');

        this.isUserLoggedIn = true;

        return new Promise<boolean>((resolve, reject) => {
            resolve(true);
        });
    }

    public async logout(): Promise<void> {
        this.isUserLoggedIn = false;
    }

    public async auth(): Promise<void> {}
}
