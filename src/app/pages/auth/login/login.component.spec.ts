import {LoginComponent} from './login.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AuthService} from '../../../services/api/auth/auth.service';
import {FetchMock} from '../../../mock/fetch.mock';
import {FormsModule} from '@angular/forms';
import {SnackbarService} from '../../../components/snackbar/services/snackbar/snackbar.service';
import {RouterTestingModule} from '@angular/router/testing';
import {ApiService} from '../../../services/api/api.service';

describe('LoginComponent', () => {
    let authService: AuthService;
    let fetchMock: FetchMock;
    let loginMethodSpy: jasmine.Spy;

    let fixture: ComponentFixture<LoginComponent>;
    let component: LoginComponent;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [FormsModule, RouterTestingModule],
            providers: [AuthService, SnackbarService, ApiService],
        }).compileComponents();
        authService = TestBed.inject(AuthService);
        loginMethodSpy = spyOn(authService, 'login');

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

    it('should change email value', () => {});

    it('should successfully call login method', () => {
        component.loginSubmitHandler();

        expect(loginMethodSpy).toHaveBeenCalled();
    });
});
