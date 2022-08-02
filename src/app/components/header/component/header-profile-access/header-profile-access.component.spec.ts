import {HeaderProfileAccessComponent} from './header-profile-access.component';
import {AuthService} from '../../../../services/api/auth/auth.service';
import {FetchMock, VALID_USER_LOGIN_DATA} from '../../../../mock/fetch.mock';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {AuthServiceMock} from '../../../../mock/authService.mock';
import {NgxPopperjsModule} from 'ngx-popperjs';

describe('HeaderProfileAccessComponent', () => {
    let authServiceMock: AuthServiceMock;
    let logoutMethodSpy: jasmine.Spy;

    let fixture: ComponentFixture<HeaderProfileAccessComponent>;
    let component: HeaderProfileAccessComponent;
    let host: HTMLElement;

    beforeEach(() => {
        authServiceMock = new AuthServiceMock();

        TestBed.configureTestingModule({
            declarations: [HeaderProfileAccessComponent],
            imports: [NgxPopperjsModule],
            providers: [{provide: AuthService, useValue: authServiceMock}],
        }).compileComponents();

        logoutMethodSpy = spyOn(authServiceMock, 'logout');
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderProfileAccessComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;

        authServiceMock = TestBed.inject(AuthService);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show user icon if logged in', async () => {
        await authServiceMock.login(VALID_USER_LOGIN_DATA);

        checkTagName('BUTTON');
    });

    it('should show login button if not logged in', async () => {
        await authServiceMock.logout();

        checkTagName('A');
    });

    it('should call logout function when click on reset button', async () => {
        await authServiceMock.login(VALID_USER_LOGIN_DATA);

        const resetButton = fixture.debugElement.query(By.css('.reset'));

        resetButton.triggerEventHandler('click', null);

        fixture.detectChanges();

        expect(logoutMethodSpy).toHaveBeenCalled();
    });

    // [SECTION] Utility Functions
    function checkTagName(tagName: string): void {
        fixture.detectChanges();

        const element = host.querySelector('.auth-button');

        expect(element?.tagName).toEqual(tagName);
    }
});
