import {Pipe, PipeTransform} from '@angular/core';
import {GameModel} from '../../models/game/game.model';

@Pipe({
    name: 'sumPrices',
})
export class SumPricesPipe implements PipeTransform {
    public transform(games: GameModel[]): number {
        let sum = 0;
        for (let game of games) {
            sum += game.priceOnSale;
        }
        return sum;
    }
}
