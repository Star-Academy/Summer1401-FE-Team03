import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardsComponent} from './cards.component';
import {CardModule} from '../../../../components/card/card.module';
import {ImageSourceModule} from '../../../../pipes/image-source/image-source.module';

@NgModule({
    declarations: [CardsComponent],
    imports: [CommonModule, CardModule, ImageSourceModule],
    exports: [CardsComponent],
})
export class CardsModule {}
