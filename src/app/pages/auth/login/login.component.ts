import {Component} from '@angular/core';
import {LoginUserModel} from './models/login-user.model';
import {SnackbarTypes} from '../../../models/enum/snackbar.types';
import {AuthService} from '../../../services/api/auth/auth.service';
import {SnackbarService} from '../../../components/snackbar/services/snackbar/snackbar.service';
import {Router} from '@angular/router';
import {SNACKBAR_LOGGED_IN} from '../language/message';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['../auth.component.scss'],
})
export class LoginComponent {
    public user: LoginUserModel = {
        username: '',
        email: '',
        password: '',
    };

    public constructor(
        private authService: AuthService,
        private snackbarService: SnackbarService,
        private router: Router
    ) {}

    public async loginSubmitHandler(): Promise<void> {
        const succeeded = await this.authService.login(this.user);

        if (succeeded) {
            await this.router.navigateByUrl('/');
            this.snackbarService.show(SNACKBAR_LOGGED_IN, SnackbarTypes.Success);
        }
    }
}
