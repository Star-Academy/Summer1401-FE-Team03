import {Component} from '@angular/core';
import {AuthService} from '../../services/api/auth/auth.service';
import {NgxPopperjsPlacements} from 'ngx-popperjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    public NgxPopperjsPlacements = NgxPopperjsPlacements;

    public constructor(public authService: AuthService) {}
}
