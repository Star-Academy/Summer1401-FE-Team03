import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'discount',
})
export class DiscountPipe implements PipeTransform {
    public transform(price: number, priceOnSale: number): number {
        const difference = price - priceOnSale;
        return Math.ceil((difference / price) * 100);
    }
}
