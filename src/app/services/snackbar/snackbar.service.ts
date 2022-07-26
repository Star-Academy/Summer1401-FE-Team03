import {Injectable} from '@angular/core';
import {SnackbarComponent} from '../../components/snackbar/snackbar.component';
import SnackbarTypes from '../../models/enum/snackbar.types';

@Injectable({
    providedIn: 'root',
})
export class SnackbarService {
    private SnackbarComponent!: SnackbarComponent;

    public initComponent(SnackbarComponent: SnackbarComponent): void {
        this.SnackbarComponent = SnackbarComponent;
    }

    public show(message: string, type: SnackbarTypes): void {
        this.SnackbarComponent.show(message, type);
    }
}
