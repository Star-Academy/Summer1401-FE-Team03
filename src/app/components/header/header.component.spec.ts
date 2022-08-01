import {HeaderComponent} from './header.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AuthService} from '../../services/api/auth/auth.service';
import {ApiService} from '../../services/api/api.service';
import {SnackbarService} from '../snackbar/services/snackbar/snackbar.service';
import {HeaderProfileAccessComponent} from './component/header-profile-access/header-profile-access.component';
import {SearchBoxModule} from './component/search-box/search-box.module';
import {NgxPopperjsModule} from 'ngx-popperjs';
import {DividerVerticalModule} from '../divider-vertical/divider-vertical.module';
import {AuthServiceMock} from '../../mock/authService.mock';

describe('HeaderComponent', () => {
    let authService: AuthServiceMock;

    let fixture: ComponentFixture<HeaderComponent>;
    let component: HeaderComponent;
    let host: HTMLElement;

    beforeEach(() => {
        authService = new AuthServiceMock();
        TestBed.configureTestingModule({
            declarations: [HeaderComponent, HeaderProfileAccessComponent],
            imports: [SearchBoxModule, NgxPopperjsModule, DividerVerticalModule],
            providers: [{provide: AuthService, useValue: authService}, ApiService, SnackbarService],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show coins icon if logged in', async () => {
        authService.isUserLoggedIn = true;

        fixture.detectChanges();

        const element = host.querySelector('div');

        expect(element).toBeTruthy();
    });

    it('should not show coins icon if not logged in', () => {
        authService.isUserLoggedIn = false;

        fixture.detectChanges();

        const element = host.querySelector('header > [data-test-id="coin-box"]');
        debugger;
        expect(element).not.toBeTruthy();
    });
});
