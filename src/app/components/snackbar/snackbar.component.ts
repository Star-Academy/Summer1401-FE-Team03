import {Component} from '@angular/core';

@Component({
    selector: 'app-snackbar',
    templateUrl: './snackbar.component.html',
    styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent {
    private readonly FADE_AWAY: number = 2_000;
    private interval: number | null = null;

    public message: string | null = null;
    public color?: string | null = null;
    public isShown: boolean = false;

    public show(message: string, color?: string): void {
        this.clearIntervalIfExists();
        this.message = message;
        this.color = color || null;
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
