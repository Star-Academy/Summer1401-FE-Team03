import {Component} from '@angular/core';
import User from '../../models/user.model';
import {Router} from '@angular/router';
import {ApiService} from '../../services/api/api.service';
import {AuthService} from '../../services/api/auth/auth.service';
import {SnackbarService} from '../../services/snackbar/snackbar.service';
import SnackbarTypes from '../../enum/snackbar.types';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
    public user: User = {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
    };

    public constructor(
        private router: Router,
        private authService: AuthService,
        private snackbarService: SnackbarService
    ) {}

    public isLoginInView: boolean = true;

    public async formSubmitHandler(): Promise<void> {
        const succeeded = await this.authService.login(this.user);
        if (succeeded) {
            await this.router.navigateByUrl('/');
            this.snackbarService.show('شما وارد حساب کاربری خود شدید!', SnackbarTypes.Success);
        }
    }
}
