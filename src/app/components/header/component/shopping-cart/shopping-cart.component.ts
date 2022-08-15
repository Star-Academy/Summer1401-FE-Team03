import {Component, OnInit} from '@angular/core';
import {NgxPopperjsPlacements} from 'ngx-popperjs';
import {AuthService} from '../../../../services/api/auth/auth.service';
import {CartService} from '../../../../services/cart/cart.service';
import {EMPTY_SHOPPING_CART, SHOPPING_CART, SIGN_UP_SIGN_IN} from '../../../../languages/fa-IR/fa';
import {LOGIN_LINK, SHOPPING_CART_LINK} from '../../../../links/links';

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
    public NgxPopperjsPlacements = NgxPopperjsPlacements;

    public emptyShoppingCart: string = EMPTY_SHOPPING_CART;
    public shoppingCart: string = SHOPPING_CART;
    public singUPSignIn: string = SIGN_UP_SIGN_IN;

    public shoppingCartLink: string = SHOPPING_CART_LINK;
    public loginLink: string = LOGIN_LINK;

    public constructor(public authService: AuthService, public cartService: CartService) {}

    public ngOnInit(): void {
        this.cartService.getCartGames();
    }
}
