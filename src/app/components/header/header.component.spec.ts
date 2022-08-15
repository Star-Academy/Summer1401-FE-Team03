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
import {VALID_USER_LOGIN_DATA} from '../../mock/fetch.mock';
import {FilterService} from '../../services/filter/filter.service';
import {FilterServiceMock} from '../../mock/filterService.mock';

describe('HeaderComponent', () => {
    let authServiceMock: AuthServiceMock;
    let filterServiceMock: FilterServiceMock;

    let fixture: ComponentFixture<HeaderComponent>;
    let component: HeaderComponent;
    let host: HTMLElement;

    beforeEach(() => {
        authServiceMock = new AuthServiceMock();
        filterServiceMock = new FilterServiceMock();

        TestBed.configureTestingModule({
            declarations: [HeaderComponent, HeaderProfileAccessComponent],
            imports: [SearchBoxModule, NgxPopperjsModule, DividerVerticalModule],
            providers: [
                {provide: AuthService, useValue: authServiceMock},
                ApiService,
                SnackbarService,
                {provide: FilterService, useValue: filterServiceMock},
            ],
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
        await authServiceMock.login(VALID_USER_LOGIN_DATA);

        fixture.detectChanges();

        const element = host.querySelector('div');

        expect(element).toBeTruthy();
    });

    it('should not show coins icon if not logged in', async () => {
        await authServiceMock.logout();

        fixture.detectChanges();

        const element = host.querySelector('header > div');

        expect(element).toBeFalsy();
    });

    it('should call resize window', () => {
        const spyOnResize = spyOn(component, 'onWindowResize');
        window.dispatchEvent(new Event('resize'));
        expect(spyOnResize).toHaveBeenCalled();
    });
});
