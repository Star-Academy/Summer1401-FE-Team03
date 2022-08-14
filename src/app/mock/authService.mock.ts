import {LoginRequestModel} from '../models/api/login/login-request.model';
import {User} from '../models/user.model';

export class AuthServiceMock {
    public cachedUser: User | null = null;
    public isUserLoggedIn: boolean = false;

    public async login(data: LoginRequestModel): Promise<boolean> {
        this.isUserLoggedIn = true;

        return true;
    }

    public async logout(): Promise<void> {
        this.isUserLoggedIn = false;
    }
}
