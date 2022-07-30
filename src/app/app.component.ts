import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/api/auth/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    public constructor(private authService: AuthService) {}

    public async ngOnInit(): Promise<void> {
        await this.checkIsLogin();
    }
    public async checkIsLogin(): Promise<void> {
        await this.authService.auth();
    }
}
