import {Component} from '@angular/core';
import {NgxPopperjsPlacements} from 'ngx-popperjs';
import {AuthService} from '../../../../services/api/auth/auth.service';

@Component({
    selector: 'app-profile-button',
    templateUrl: './profile-button.component.html',
    styleUrls: ['./profile-button.component.scss'],
})
export class ProfileButtonComponent {
    public NgxPopperjsPlacements = NgxPopperjsPlacements;

    public constructor(public authService: AuthService) {}
}
