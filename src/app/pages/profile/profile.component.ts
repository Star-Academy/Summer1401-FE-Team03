import {Component, ElementRef, ViewChild} from '@angular/core';
import {AuthService} from '../../services/api/auth/auth.service';
import {AlterRequestModel} from '../../models/api/alter/alter-request.model';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
    public loadContent = 1;

    public constructor(public authService: AuthService) {}
}
