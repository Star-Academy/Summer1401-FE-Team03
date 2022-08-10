import {AfterViewInit, Component, Input, OnDestroy} from '@angular/core';
import {SlideshowItem} from '../../models/slidshow-item.models';
import {GameImageModel} from '../../models/game/dto/gameImage.model';

@Component({
    selector: 'app-slideshow',
    templateUrl: './slideshow.component.html',
    styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements AfterViewInit, OnDestroy {
    @Input() public items: GameImageModel[] = [];

    private readonly INTERVAL_DELAY: number = 4_000;

    public activeIndex: number = 0;
    private interval?: ReturnType<typeof setInterval>;

    public ngAfterViewInit(): void {
        this.initInterval();
    }

    public ngOnDestroy(): void {
        clearInterval(this.interval);
        this.interval = undefined;
    }

    public changeActiveIndex(index: number): void {
        if (index < 0) index = this.items.length - 1;
        else if (index >= this.items.length) index = 0;

        this.activeIndex = index;
        this.resetInterval();
    }

    private resetInterval(): void {
        clearInterval(this.interval);

        this.initInterval();
    }

    public initInterval(): void {
        this.interval = setInterval(() => {
            this.changeActiveIndex(this.activeIndex + 1);
        }, this.INTERVAL_DELAY);
    }

    public stopSlideshow(): void {
        clearInterval(this.interval);
    }
}
