import {Injectable} from '@angular/core';
import {SnackbarComponent} from '../../snackbar.component';
import {SnackbarTypes} from '../../../../models/enum/snackbar.types';

@Injectable({
    providedIn: 'root',
})
export class SnackbarService {
    private readonly FADE_AWAY: number = 4_000;
    private timeout: number | null = null;

    public message: string | null = null;
    public type: SnackbarTypes | null = null;
    public isShown: boolean = false;

    public show(message: string, type: SnackbarTypes): void {
        this.setSnackbarProperties(message, true);
        this.type = type;

        this.timeout = setTimeout(() => {
            this.setSnackbarProperties(null, false);
        }, this.FADE_AWAY);
    }

    public snackbarCloseHandler(): void {
        this.setSnackbarProperties(null, false);
    }

    private setSnackbarProperties(message: string | null, isShown: boolean): void {
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }

        this.message = message;
        this.isShown = isShown;
    }
}
