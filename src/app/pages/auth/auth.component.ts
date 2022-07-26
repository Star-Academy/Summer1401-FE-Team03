import {Component} from '@angular/core';
import User from '../../models/user.model';
import {Router} from '@angular/router';

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

    public constructor(private router: Router) {}

    public isLoginInView: boolean = true;

    public formSubmitHandler(): void {}
}
