import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CartComponent} from './cart.component';
import {CartService} from '../../../../services/cart/cart.service';
import {SnackbarService} from '../../../../components/snackbar/services/snackbar/snackbar.service';
import {AuthServiceMock} from '../../../../mock/authService.mock';
import {AuthService} from '../../../../services/api/auth/auth.service';
import {SumPricesModule} from '../../../../pipes/sum-prices/sum-prices.module';
import {VALID_USER_LOGIN_DATA} from '../../../../mock/fetch.mock';
import {ImageSourceModule} from '../../../../pipes/image-source/image-source.module';
import {LibraryServiceMock} from '../../../../mock/library.mock';
import {LibraryService} from '../../../../services/api/library/library.service';

describe('CartComponent', () => {
    let component: CartComponent;
    let fixture: ComponentFixture<CartComponent>;
    let authServiceMock: AuthServiceMock;
    let libraryMock: LibraryServiceMock;

    beforeEach(async () => {
        authServiceMock = new AuthServiceMock();
        libraryMock = new LibraryServiceMock();

        await TestBed.configureTestingModule({
            imports: [SumPricesModule, ImageSourceModule],
            declarations: [CartComponent],
            providers: [
                CartService,
                SnackbarService,
                {provide: AuthService, useValue: authServiceMock},
                {provide: LibraryService, useValue: libraryMock},
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should pay', async () => {
        await authServiceMock.login(VALID_USER_LOGIN_DATA);
        if (authServiceMock.cachedUser) authServiceMock.cachedUser.credit = 1000;

        const alterCreditSpy = spyOn(authServiceMock, 'alterCredit');

        await component.payHandler();

        expect(alterCreditSpy).toHaveBeenCalled();
    });

    it('should not pay', async () => {
        await authServiceMock.login(VALID_USER_LOGIN_DATA);
        if (authServiceMock.cachedUser) authServiceMock.cachedUser.credit = -1;
        fixture.detectChanges();

        const alterCreditSpy = spyOn(authServiceMock, 'alterCredit');

        await component.payHandler();

        expect(alterCreditSpy).not.toHaveBeenCalled();
    });
});
