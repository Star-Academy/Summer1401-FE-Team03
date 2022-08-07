import {Injectable} from '@angular/core';
import {SnackbarTypes} from '../../../../models/enum/snackbar.types';

@Injectable()
export class SnackbarService {
    private readonly DISPLAY_DURATION: number = 4_000;
    private timeout?: ReturnType<typeof setTimeout>;

    public message: string | null = null;
    public type: SnackbarTypes | null = null;
    public isShown: boolean = false;

    public show(message: string, type: SnackbarTypes): void {
        this.setSnackbarProperties(message, true);
        this.type = type;

        this.timeout = setTimeout(() => {
            this.setSnackbarProperties(null, false);
        }, this.DISPLAY_DURATION);
    }

    public snackbarCloseHandler(): void {
        this.setSnackbarProperties(null, false);
    }

    private setSnackbarProperties(message: string | null, isShown: boolean): void {
        clearTimeout(this.timeout);

        this.message = message;
        this.isShown = isShown;
    }
}
