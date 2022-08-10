import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DiscountPipe} from './discount.pipe';
import {FilterPipe} from '../filter-pipe/filter.pipe';

@NgModule({
    declarations: [DiscountPipe],
    imports: [CommonModule],
    exports: [DiscountPipe],
})
export class DiscountPipeModule {}
