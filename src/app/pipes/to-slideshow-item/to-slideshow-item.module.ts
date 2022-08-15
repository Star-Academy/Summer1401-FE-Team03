import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToSlideshowItemPipe} from './to-slideshow-item.pipe';

@NgModule({
    declarations: [ToSlideshowItemPipe],
    exports: [ToSlideshowItemPipe],
    imports: [CommonModule],
})
export class ToSlideshowItemModule {}
