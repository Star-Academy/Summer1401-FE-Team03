import {Component} from '@angular/core';
import {NgxPopperjsPlacements} from 'ngx-popperjs';
import {AuthService} from '../../../../services/api/auth/auth.service';

@Component({
    selector: 'app-header-profile-access',
    templateUrl: './header-profile-access.component.html',
    styleUrls: ['./header-profile-access.component.scss'],
})
export class HeaderProfileAccessComponent {
    public NgxPopperjsPlacements = NgxPopperjsPlacements;

    public constructor(public authService: AuthService) {}
}
