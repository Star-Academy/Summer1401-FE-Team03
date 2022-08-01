import {HeaderProfileAccessComponent} from './header-profile-access.component';
import {AuthService} from '../../../../services/api/auth/auth.service';
import {FetchMock, VALID_USER_LOGIN_DATA} from '../../../../mock/fetch.mock';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {AuthServiceMock} from '../../../../mock/authService.mock';
import {NgxPopperjsModule} from 'ngx-popperjs';

describe('HeaderProfileAccessComponent', () => {
    let authService: AuthServiceMock;
    let logoutMethodSpy: jasmine.Spy;

    let fixture: ComponentFixture<HeaderProfileAccessComponent>;
    let component: HeaderProfileAccessComponent;
    let host: HTMLElement;

    beforeEach(() => {
        authService = new AuthServiceMock();

        TestBed.configureTestingModule({
            declarations: [HeaderProfileAccessComponent],
            imports: [NgxPopperjsModule],
            providers: [{provide: AuthService, useValue: authService}],
        }).compileComponents();

        logoutMethodSpy = spyOn(authService, 'logout');
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderProfileAccessComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;

        authService = TestBed.inject(AuthService);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show user icon if logged in', async () => {
        authService.isUserLoggedIn = true;

        fixture.detectChanges();

        const element = host.querySelector('.auth-button');

        expect(element?.tagName).toEqual('BUTTON');
    });

    it('should show login button if not logged in', () => {
        authService.isUserLoggedIn = false;

        fixture.detectChanges();

        const element = host.querySelector('.auth-button');

        expect(element?.tagName).toEqual('A');
    });

    it('should call logout function when click on reset button', () => {
        authService.isUserLoggedIn = true;

        fixture.detectChanges();

        const resetButton = fixture.debugElement.query(By.css('.reset'));

        fixture.detectChanges();

        resetButton.triggerEventHandler('click', null);

        fixture.detectChanges();

        expect(logoutMethodSpy).toHaveBeenCalled();
    });
});
