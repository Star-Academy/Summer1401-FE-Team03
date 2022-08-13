import {Component, OnInit} from '@angular/core';
import {CartService} from '../../../../services/cart/cart.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
    public constructor(public cartService: CartService) {
        cartService.getCartGames();
    }
}
