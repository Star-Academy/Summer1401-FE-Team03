import {Component} from '@angular/core';
import {AuthService} from '../../services/api/auth/auth.service';
import {AlterRequestModel} from '../../models/api/alter/alter-request.model';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
    public data: AlterRequestModel = {
        firstName: this.authService.cachedUser?.firstName,
        avatar: this.authService.cachedUser?.avatar,
        lastName: this.authService.cachedUser?.lastName,
        email: this.authService.cachedUser?.email,
        dateOfBirth: new Date(this.authService.cachedUser?.dateOfBirth || ''),
        phone: this.authService.cachedUser?.phone,
        username: this.authService.cachedUser?.username,
        password: this.authService.cachedUser?.password,
        gender: this.authService.cachedUser?.gender,
    };

    public constructor(private authService: AuthService) {}

    public async formSubmitHandler(): Promise<void> {
        await this.authService.alter(this.data);
    }
}
