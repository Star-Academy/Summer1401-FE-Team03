import {Component, Input, OnInit} from '@angular/core';
import {GameModel} from '../../../../../../models/game/game.model';
import {CartService} from '../../../../../../services/cart/cart.service';

@Component({
    selector: 'app-shopping-cart-item',
    templateUrl: './shopping-cart-item.component.html',
    styleUrls: ['./shopping-cart-item.component.scss'],
})
export class ShoppingCartItemComponent implements OnInit {
    @Input() public game!: GameModel;

    public imageSrc: string = '';
    public linkToGamePage: string = '';

    public constructor(public cartService: CartService) {}

    public ngOnInit(): void {
        this.imageSrc = `https://images.igdb.com/igdb/image/upload/t_thumb/${this.game.cover.id}.jpg`;
        this.linkToGamePage = `/game/${this.game.id}`;
    }
}
