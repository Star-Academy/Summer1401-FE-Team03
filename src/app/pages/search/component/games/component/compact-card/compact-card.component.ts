import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {GameModel} from '../../../../../../models/game/game.model';

@Component({
    selector: 'app-compact-card',
    templateUrl: './compact-card.component.html',
    styleUrls: ['./compact-card.component.scss'],
})
export class CompactCardComponent implements OnChanges {
    @Input() public game!: GameModel;

    public isOnSale: boolean = false;

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.game.currentValue.price && changes.game.currentValue.priceOnSale) {
            this.isOnSale = this.game.price !== this.game.priceOnSale;
        }
    }

    public calculateDiscount(): number {
        const difference = this.game.price - this.game.priceOnSale;
        return Math.ceil((difference / this.game.price) * 100);
    }

    public getImageSource(game: GameModel): string {
        if (game.cover?.id) {
            return `https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.id}.jpg`;
        } else {
            return 'assets/card-images/no-image-compact-card.webp';
        }
    }
}
