import {Component, OnInit} from '@angular/core';
import {NgxPopperjsPlacements} from 'ngx-popperjs';
import {AuthService} from '../../../../services/api/auth/auth.service';
import {CartService} from '../../../../services/cart/cart.service';

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
    public NgxPopperjsPlacements = NgxPopperjsPlacements;

    public constructor(public authService: AuthService, public cartService: CartService) {}

    public ngOnInit(): void {
        this.cartService.getCartGames();
    }
}
