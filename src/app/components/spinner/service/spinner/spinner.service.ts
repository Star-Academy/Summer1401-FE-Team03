import {Injectable} from '@angular/core';

@Injectable()
export class SpinnerService {
    public counter: number = 0;

    public async wrapAsync<T>(callback: () => T): Promise<T> {
        this.show();

        try {
            return await callback();
        } finally {
            this.hide();
        }
    }
    public show(): void {
        this.counter++;
    }

    public hide(): void {
        if (this.counter === 0) return;

        this.counter--;
    }
}
