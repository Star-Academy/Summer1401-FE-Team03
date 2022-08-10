import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageSourcePipe} from './image-source.pipe';

@NgModule({
    declarations: [ImageSourcePipe],
    imports: [CommonModule],
    exports: [ImageSourcePipe],
})
export class ImageSourceModule {}
