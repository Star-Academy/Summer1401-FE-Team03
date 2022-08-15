import {Component} from '@angular/core';
import {AuthService} from '../../../../services/api/auth/auth.service';
import {SnackbarService} from '../../../../components/snackbar/services/snackbar/snackbar.service';
import {SnackbarTypes} from '../../../../models/enum/snackbar.types';
import {
    ENTER_CREDIT_INCREMENT_AMOUNT,
    INCREMENT_CREDIT_PAGE_TITLE,
    PAY,
    TOMAN_TO_LEVEL_COIN,
} from '../../../../languages/fa-IR/fa';

@Component({
    selector: 'app-alter-credit',
    templateUrl: './alter-credit.component.html',
    styleUrls: ['./alter-credit.component.scss'],
})
export class AlterCreditComponent {
    public credit: number = 0;
    public incrementCreditPageTitle: string = INCREMENT_CREDIT_PAGE_TITLE;
    public enterCreditIncrementAmount: string = ENTER_CREDIT_INCREMENT_AMOUNT;
    public tomanToLevelCoin: string = TOMAN_TO_LEVEL_COIN;
    public pay: string = PAY;

    public constructor(private authService: AuthService, private snackbarService: SnackbarService) {}

    public async payHandler(): Promise<void> {
        let newCredit = this.credit / 1000;
        let lastCredit: number = this.authService.cachedUser?.credit || 0;
        let totalCredit = newCredit + lastCredit;

        if (totalCredit === lastCredit) {
            this.snackbarService.show('حداقل 1000 تومان افزایش اعتبار داشته باشید', SnackbarTypes.Warning);
            return;
        }

        const result = await this.authService.alterCredit(totalCredit);

        if (result) {
            this.snackbarService.show('اعتبار شما با موفقیت اضافه شد', SnackbarTypes.Success);
        }
    }
}
