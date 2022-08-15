import {Component, Input, OnInit} from '@angular/core';
import {GameModel} from '../../../../../../models/game/game.model';
import {CartService} from '../../../../../../services/cart/cart.service';
import {LEVEL_COIN} from '../../../../../../languages/fa-IR/fa';

@Component({
    selector: 'app-cart-item',
    templateUrl: './cart-item.component.html',
    styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
    @Input() public game!: GameModel;

    public imageSrc: string = '';
    public linkToGamePage: string = '';
    public levelCoin: string = LEVEL_COIN;

    public constructor(public cartService: CartService) {}

    public ngOnInit(): void {
        this.imageSrc = `https://images.igdb.com/igdb/image/upload/t_thumb/${this.game.cover.id}.jpg`;
        this.linkToGamePage = `/game/${this.game.id}`;
    }
}
