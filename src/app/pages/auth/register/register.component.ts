import {Component} from '@angular/core';
import {SnackbarTypes} from '../../../models/enum/snackbar.types';
import {AuthService} from '../../../services/api/auth/auth.service';
import {SnackbarService} from '../../../components/snackbar/services/snackbar/snackbar.service';
import {Router} from '@angular/router';
import {YOU_ARE_REGISTERED} from './language/message';
import {RegisterUserModel} from './models/register-user.model';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['../auth.component.scss'],
})
export class RegisterComponent {
    public user: RegisterUserModel = {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
    };

    public constructor(
        private authService: AuthService,
        private snackbarService: SnackbarService,
        private router: Router
    ) {}

    public async registerSubmitHandler(): Promise<void> {
        const succeeded = await this.authService.register(this.user);

        if (succeeded) {
            await this.router.navigateByUrl('/');
            this.snackbarService.show(YOU_ARE_REGISTERED, SnackbarTypes.Success);
        }
    }
}
