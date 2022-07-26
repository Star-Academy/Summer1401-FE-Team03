import {Component} from '@angular/core';
import {AuthService} from '../../services/api/auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    public isLoggedIn = false;

    public constructor(private authService: AuthService) {
        this.init().then();
    }

    private async init(): Promise<void> {
        this.isLoggedIn = await this.authService.isLoggedIn();
    }
}
