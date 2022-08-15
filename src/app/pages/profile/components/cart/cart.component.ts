import {Component} from '@angular/core';
import {CartService} from '../../../../services/cart/cart.service';
import {SnackbarTypes} from '../../../../models/enum/snackbar.types';
import {AuthService} from '../../../../services/api/auth/auth.service';
import {SnackbarService} from '../../../../components/snackbar/services/snackbar/snackbar.service';
import {LibraryService} from '../../../../services/api/library/library.service';
import {CLEAR_SHOPPING_CART, EMPTY_SHOPPING_CART, LEVEL_COIN} from '../../../../languages/fa-IR/fa';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
    public payButtonLoading = false;

    public emptyShoppingCart: string = EMPTY_SHOPPING_CART;
    public levelCoin: string = LEVEL_COIN;
    public clearShoppingCart: string = CLEAR_SHOPPING_CART;

    public constructor(
        public cartService: CartService,
        public authService: AuthService,
        public snackbarService: SnackbarService,
        private libraryService: LibraryService
    ) {
        cartService.getCartGames();
    }

    public async payHandler(): Promise<void> {
        const credit = this.authService.cachedUser?.credit ?? 0;
        const sumPrices = this.getSumPrices();
        const totalCredit = credit - sumPrices;

        if (totalCredit < 0) {
            this.snackbarService.show('اعتبار شما کافی نیست', SnackbarTypes.Error);
            return;
        }
        this.payButtonLoading = true;
        let payResult = await this.libraryService.addAll(this.cartService.cartGames);
        if (payResult) payResult = await this.authService.alterCredit(totalCredit);
        this.payButtonLoading = false;

        if (payResult) {
            this.cartService.clearList();
            this.snackbarService.show('خرید شما با موفقیت انجام شد', SnackbarTypes.Success);
        }
    }

    private getSumPrices(): number {
        let sum = 0;
        for (let game of this.cartService.cartGames) {
            sum += game.priceOnSale;
        }
        return sum;
    }
}
