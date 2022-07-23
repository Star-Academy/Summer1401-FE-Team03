import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardsComponent} from './cards.component';
import {CardModule} from '../card/card.module';

@NgModule({
    declarations: [CardsComponent],
    imports: [CommonModule, CardModule],
    exports: [CardsComponent],
})
export class CardsModule {}
