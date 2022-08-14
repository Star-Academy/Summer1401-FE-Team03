import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CartComponent} from './cart.component';
import {CartService} from '../../../../services/cart/cart.service';
import {SnackbarService} from '../../../../components/snackbar/services/snackbar/snackbar.service';
import {AuthServiceMock} from '../../../../mock/authService.mock';
import {AuthService} from '../../../../services/api/auth/auth.service';
import {SumPricesModule} from '../../../../pipes/sum-prices/sum-prices.module';

describe('CartComponent', () => {
    let component: CartComponent;
    let fixture: ComponentFixture<CartComponent>;
    let authServiceMock: AuthServiceMock;

    beforeEach(async () => {
        authServiceMock = new AuthServiceMock();

        await TestBed.configureTestingModule({
            imports: [SumPricesModule],
            declarations: [CartComponent],
            providers: [CartService, SnackbarService, {provide: AuthService, useValue: authServiceMock}],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
