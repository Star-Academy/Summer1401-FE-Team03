import {Component, ElementRef, ViewChild} from '@angular/core';
import {AuthService} from '../../services/api/auth/auth.service';
import {AlterRequestModel} from '../../models/api/alter/alter-request.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
    public loadContent = 1;
    public section?: string;

    public constructor(public authService: AuthService, private route: ActivatedRoute) {
        this.switchToProfileComponents();
    }

    private switchToProfileComponents(): void {
        this.section = this.route.snapshot.params.section;

        switch (this.section) {
            case 'shopping-cart':
                this.loadContent = 2;
                break;
            case 'library':
                this.loadContent = 3;
                break;
            case 'credit':
                this.loadContent = 4;
                break;
            default:
                this.loadContent = 1;
        }
    }
}
