import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from './card.component';
import {RouterModule} from '@angular/router';
import {ImageSourceModule} from '../../pipes/image-source/image-source.module';

@NgModule({
    declarations: [CardComponent],
    exports: [CardComponent],
    imports: [CommonModule, RouterModule, ImageSourceModule],
})
export class CardModule {}
