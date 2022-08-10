import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SlideshowComponent} from './slideshow.component';
import {ImageSourceModule} from '../../pipes/image-source/image-source.module';

@NgModule({
    declarations: [SlideshowComponent],
    imports: [CommonModule, ImageSourceModule],
    exports: [SlideshowComponent],
})
export class SlideshowModule {}
