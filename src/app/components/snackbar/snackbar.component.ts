import {Component} from '@angular/core';
import {SnackbarService} from './services/snackbar/snackbar.service';
import {SnackbarTypes} from '../../models/enum/snackbar.types';

@Component({
    selector: 'app-snackbar',
    templateUrl: './snackbar.component.html',
    styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent {
    public constructor(public SnackbarService: SnackbarService) {}
}
