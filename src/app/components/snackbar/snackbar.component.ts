import {Component} from '@angular/core';
import {SnackbarService} from '../../services/snackbar/snackbar.service';
import SnackbarTypes from '../../enum/snackbar.types';
import {ChangeDetection} from '@angular/cli/lib/config/workspace-schema';

@Component({
    selector: 'app-snackbar',
    templateUrl: './snackbar.component.html',
    styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent {
    private readonly FADE_AWAY: number = 4_000;
    private timeout: number | null = null;

    public message: string | null = null;
    public type: SnackbarTypes | null = null;
    public isShown: boolean = false;

    public constructor(private SnackbarService: SnackbarService) {
        this.SnackbarService.initComponent(this);
    }

    public show(message: string, type: SnackbarTypes): void {
        this.clearTimeoutIfExists();
        this.message = message;
        this.type = type;
        this.isShown = true;

        this.timeout = setTimeout(() => {
            this.isShown = false;
            this.message = null;
            this.timeout = null;
        }, this.FADE_AWAY);
    }

    public snackbarCloseHandler(): void {
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
        this.isShown = false;
        this.message = null;
    }

    private clearTimeoutIfExists(): void {
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
    }
}
