import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ShoppingCartComponent} from './shopping-cart.component';
import {CartService} from '../../../../services/cart/cart.service';
import {AuthService} from '../../../../services/api/auth/auth.service';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthServiceMock} from '../../../../mock/authService.mock';
import {LocalStorageMock} from '../../../../mock/localStorage.mock';
import {SnackbarService} from '../../../snackbar/services/snackbar/snackbar.service';
import {host} from '@angular-devkit/build-angular/src/test-utils';
import {VALID_USER_LOGIN_DATA} from '../../../../mock/fetch.mock';

describe('ShoppingCartComponent', () => {
    let component: ShoppingCartComponent;
    let fixture: ComponentFixture<ShoppingCartComponent>;
    let authServiceMock: AuthServiceMock;
    let localStorageMock: LocalStorageMock;
    let host: HTMLElement;

    beforeEach(async () => {
        authServiceMock = new AuthServiceMock();
        localStorageMock = new LocalStorageMock();

        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [ShoppingCartComponent],
            providers: [CartService, SnackbarService, {provide: AuthService, useValue: authServiceMock}],
        }).compileComponents();

        spyOn(localStorage, 'getItem').and.callFake(localStorageMock.getItem.bind(localStorageMock));
        spyOn(localStorage, 'setItem').and.callFake(localStorageMock.setItem.bind(localStorageMock));
        spyOn(localStorage, 'removeItem').and.callFake(localStorageMock.removeItem.bind(localStorageMock));
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ShoppingCartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show cart icon when login', () => {
        authServiceMock.login(VALID_USER_LOGIN_DATA);
        fixture.detectChanges();

        const button = host.querySelector('.shopping-cart');

        expect(button).toBeTruthy();
    });
});
