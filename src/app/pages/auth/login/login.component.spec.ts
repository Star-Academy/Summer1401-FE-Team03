import {LoginComponent} from './login.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AuthService} from '../../../services/api/auth/auth.service';
import {FetchMock, VALID_USER_LOGIN_DATA} from '../../../mock/fetch.mock';
import {FormsModule} from '@angular/forms';
import {SnackbarService} from '../../../components/snackbar/services/snackbar/snackbar.service';
import {RouterTestingModule} from '@angular/router/testing';
import {ApiService} from '../../../services/api/api.service';
import {SpinnerService} from '../../../components/spinner/service/spinner/spinner.service';

describe('LoginComponent', () => {
    let authServiceMock: AuthService;
    let snackbarService: SnackbarService;
    let fetchMock: FetchMock;

    let fixture: ComponentFixture<LoginComponent>;
    let component: LoginComponent;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [FormsModule, RouterTestingModule],
            providers: [AuthService, SnackbarService, ApiService, SpinnerService],
        }).compileComponents();
        authServiceMock = TestBed.inject(AuthService);
        snackbarService = TestBed.inject(SnackbarService);

        fetchMock = new FetchMock();
        spyOn(window, 'fetch').and.callFake(fetchMock.fetch.bind(fetchMock));
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should successfully call login method', () => {
        const loginMethodSpy = spyOn(authServiceMock, 'login');

        component.loginSubmitHandler();

        expect(loginMethodSpy).toHaveBeenCalled();
    });

    it('should successfully call snackbar show methode when logged in', async () => {
        const showSnackbarMethodSpy = spyOn(snackbarService, 'show');

        component.user = VALID_USER_LOGIN_DATA;
        await component.loginSubmitHandler();

        expect(showSnackbarMethodSpy).toHaveBeenCalled();
    });
});
