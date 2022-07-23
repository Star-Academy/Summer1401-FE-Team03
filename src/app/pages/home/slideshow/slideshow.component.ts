import {AfterViewInit, Component, OnDestroy} from '@angular/core';

interface Item {
    src: string;
    alt: string;
}

@Component({
    selector: 'app-slideshow',
    templateUrl: './slideshow.component.html',
    styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements AfterViewInit, OnDestroy {
    private readonly INTERVAL_DELAY: number = 6000;

    public items: Item[] = [
        {src: '/assets/slides/01-compressed.jpg', alt: 'بازی ویچر سه و اکسپنشن قلب های سنگی'},
        {src: '/assets/slides/02-compressed.jpg', alt: 'بازی استری - مربوط به گربه ها'},
        {src: '/assets/slides/03-compressed.jpg', alt: 'بازی رد دد ریدمپشن دو'},
    ];

    public activeIndex: number = 0;

    private interval: number | null = null;

    public ngAfterViewInit(): void {
        this.resetInterval();
    }

    public ngOnDestroy(): void {
        if (this.interval !== null) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }

    public changeActiveIndex(index: number): void {
        if (index < 0) index = this.items.length - 1;
        else if (index >= this.items.length) index = 0;

        this.activeIndex = index;
        this.resetInterval();
    }

    private resetInterval(): void {
        if (this.interval !== null) clearInterval(this.interval);

        this.interval = setInterval(() => {
            this.changeActiveIndex(this.activeIndex + 1);
        }, this.INTERVAL_DELAY);
    }
}
