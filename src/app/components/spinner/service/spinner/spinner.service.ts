import {Injectable} from '@angular/core';

@Injectable()
export class SpinnerService {
    public counter: number = 0;

    public async wrapAsync<T>(callback: () => T): Promise<T> {
        this.showSpinner();

        try {
            return await callback();
        } finally {
            this.hideSpinner();
        }
    }
    public showSpinner(): void {
        this.counter++;
    }

    public hideSpinner(): void {
        if (this.counter === 0) return;

        this.counter--;
    }
}
