import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {GameModel} from '../../../../../../models/game/game.model';
import {CartService} from '../../../../../../services/cart/cart.service';

@Component({
    selector: 'app-compact-card',
    templateUrl: './compact-card.component.html',
    styleUrls: ['./compact-card.component.scss'],
})
export class CompactCardComponent implements OnInit {
    @Input() public game!: GameModel;

    public isOnSale: boolean = false;
    public navigateToGamePage: string = '';

    public constructor(public cartService: CartService) {}

    public ngOnInit(): void {
        if (this.game.price && this.game.priceOnSale) {
            this.isOnSale = this.game.price !== this.game.priceOnSale;
            this.navigateToGamePage = `/game/${this.game.id}`;
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
