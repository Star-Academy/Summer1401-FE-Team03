import {LoginRequestModel} from '../models/api/login/login-request.model';
import {User} from '../models/user.model';
import {VALID_USER_DATA} from './fetch.mock';
import {AlterRequestModel} from '../models/api/alter/alter-request.model';

export class AuthServiceMock {
    public cachedUser: User | null = null;
    public isUserLoggedIn: boolean = false;

    public async login(data: LoginRequestModel): Promise<boolean> {
        this.isUserLoggedIn = true;
        this.cachedUser = VALID_USER_DATA;

        return true;
    }

    public async logout(): Promise<void> {
        this.isUserLoggedIn = false;
        this.cachedUser = null;
    }

    public async alter(data: AlterRequestModel): Promise<void> {
        this.cachedUser = {
            username: data.username ?? '',
            id: VALID_USER_DATA.id,
            password: VALID_USER_DATA.password,
            gender: !!data.gender,
            credit: data.credit ?? 0,
            dateOfBirth: data.dateOfBirth?.toDateString() ?? '',
            phone: data.phone ?? '',
            avatar: data.avatar ?? '',
            lastName: data.lastName ?? '',
            firstName: data.firstName ?? '',
            email: data.email ?? '',
        };
    }

    public async alterCredit(credit: number): Promise<boolean> {
        if (this.cachedUser) {
            this.cachedUser.credit = credit;
            return true;
        }

        return false;
    }
}
