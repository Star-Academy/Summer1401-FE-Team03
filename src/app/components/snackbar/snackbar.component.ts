import {Component} from '@angular/core';
import {SnackbarService} from '../../services/snackbar/snackbar.service';
import SnackbarTypes from '../../enum/snackbar.types';

@Component({
    selector: 'app-snackbar',
    templateUrl: './snackbar.component.html',
    styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent {
    private readonly FADE_AWAY: number = 2_000;
    private interval: number | null = null;

    public message: string | null = null;
    public type: SnackbarTypes | null = null;
    public isShown: boolean = false;

    public constructor(private SnackbarService: SnackbarService) {
        this.SnackbarService.initComponent(this);
    }

    public show(message: string, type: SnackbarTypes): void {
        this.clearIntervalIfExists();
        this.message = message;
        this.type = type;
        this.isShown = true;

        setInterval(() => {
            this.isShown = false;
            this.message = null;
            this.interval = null;
        }, this.FADE_AWAY);
    }

    public snackbarCloseHandler(): void {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
        this.isShown = false;
        this.message = null;
    }

    private clearIntervalIfExists(): void {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }
}
