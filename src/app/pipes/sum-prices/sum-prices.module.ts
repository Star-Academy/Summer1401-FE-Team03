import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SumPricesPipe} from './sum-prices.pipe';

@NgModule({
    declarations: [SumPricesPipe],
    exports: [SumPricesPipe],
    imports: [CommonModule],
})
export class SumPricesModule {}
