import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SlideshowComponent = class SlideshowComponent {
    constructor() {
        this.INTERVAL_DELAY = 6000;
        this.items = [
            { src: '/assets/slides/01-compressed.jpg', alt: 'بازی ویچر سه و اکسپنشن قلب های سنگی' },
            { src: '/assets/slides/02-compressed.jpg', alt: 'بازی استری - مربوط به گربه ها' },
            { src: '/assets/slides/03-compressed.jpg', alt: 'بازی رد دد ریدمپشن دو' },
        ];
        this.activeIndex = 0;
        this.interval = null;
    }
    ngAfterViewInit() {
        this.resetInterval();
    }
    ngOnDestroy() {
        if (this.interval !== null) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }
    changeActiveIndex(index) {
        if (index < 0)
            index = this.items.length - 1;
        else if (index >= this.items.length)
            index = 0;
        this.activeIndex = index;
        this.resetInterval();
    }
    resetInterval() {
        if (this.interval !== null)
            clearInterval(this.interval);
        this.interval = setInterval(() => {
            this.changeActiveIndex(this.activeIndex + 1);
        }, this.INTERVAL_DELAY);
    }
};
SlideshowComponent = __decorate([
    Component({
        selector: 'app-slideshow',
        templateUrl: './slideshow.component.html',
        styleUrls: ['./slideshow.component.scss'],
    })
], SlideshowComponent);
export { SlideshowComponent };
//# sourceMappingURL=slideshow.component.js.map