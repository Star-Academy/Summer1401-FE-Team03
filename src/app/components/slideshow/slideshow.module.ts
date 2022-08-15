import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SlideshowComponent} from './slideshow.component';
import {ImageSourceModule} from '../../pipes/image-source/image-source.module';
import {RouterModule} from '@angular/router';
import {SlideshowImageComponent} from './components/slideshow-image/slideshow-image.component';

@NgModule({
    declarations: [SlideshowComponent, SlideshowImageComponent],
    imports: [CommonModule, ImageSourceModule, RouterModule],
    exports: [SlideshowComponent],
})
export class SlideshowModule {}
