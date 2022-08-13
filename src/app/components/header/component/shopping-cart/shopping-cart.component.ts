import {Component} from '@angular/core';
import {NgxPopperjsPlacements} from 'ngx-popperjs';
import {AuthService} from '../../../../services/api/auth/auth.service';
import {CartService} from '../../../../services/cart/cart.service';

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent {
    public NgxPopperjsPlacements = NgxPopperjsPlacements;

    public constructor(public authService: AuthService, public cartService: CartService) {
        cartService.getCartGames();
    }
}
