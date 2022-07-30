import {Component} from '@angular/core';
import {AuthService} from '../../services/api/auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    public constructor(public authService: AuthService) {}
}
