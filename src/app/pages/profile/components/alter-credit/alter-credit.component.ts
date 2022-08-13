import {Component} from '@angular/core';
import {AuthService} from '../../../../services/api/auth/auth.service';
import {SnackbarService} from '../../../../components/snackbar/services/snackbar/snackbar.service';
import {SnackbarTypes} from '../../../../models/enum/snackbar.types';

@Component({
    selector: 'app-alter-credit',
    templateUrl: './alter-credit.component.html',
    styleUrls: ['./alter-credit.component.scss'],
})
export class AlterCreditComponent {
    public credit: number = 0;

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
