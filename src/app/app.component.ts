import {Component} from '@angular/core';
import {AuthService} from './services/api/auth/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public constructor(private authService: AuthService) {
        this.checkIsLogin().then();
    }
    public async checkIsLogin(): Promise<void> {
        await this.authService.auth();
    }
}
