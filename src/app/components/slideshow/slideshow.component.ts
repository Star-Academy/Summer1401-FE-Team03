import {AfterViewInit, Component, Input, OnDestroy} from '@angular/core';
import {SlideshowItem} from '../../models/slidshow-item.models';

@Component({
    selector: 'app-slideshow',
    templateUrl: './slideshow.component.html',
    styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements AfterViewInit, OnDestroy {
    @Input() public items: SlideshowItem[] = [];
    @Input() public showInfo: boolean = false;

    private readonly INTERVAL_DELAY: number = 4_000;

    public activeIndex: number = 0;
    private interval?: ReturnType<typeof setInterval>;

    public ngAfterViewInit(): void {
        this.initNewInterval();
    }

    public ngOnDestroy(): void {
        clearInterval(this.interval);
    }

    public changeActiveIndex(index: number): void {
        if (index < 0) index = this.items.length - 1;
        else if (index >= this.items.length) index = 0;

        this.activeIndex = index;
        this.initNewInterval();
    }

    public initNewInterval(): void {
        this.stopSlideshow();

        this.initInterval();
    }

    private initInterval(): void {
        this.interval = setInterval(() => {
            this.changeActiveIndex(this.activeIndex + 1);
        }, this.INTERVAL_DELAY);
    }

    public stopSlideshow(): void {
        clearInterval(this.interval);
    }
}
