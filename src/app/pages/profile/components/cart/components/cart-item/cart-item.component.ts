import {Component, Input} from '@angular/core';
import {GameModel} from '../../../../../../models/game/game.model';
import {CartService} from '../../../../../../services/cart/cart.service';

@Component({
    selector: 'app-cart-item',
    templateUrl: './cart-item.component.html',
    styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
    @Input() public game!: GameModel;

    public constructor(public cartService: CartService) {}
}
