import {LoginComponent} from './login.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AuthService} from '../../../services/api/auth/auth.service';
import {LocalStorageMock} from '../../../mock/localStorage.mock';
import {FetchMock} from '../../../mock/fetch.mock';
import {AuthServiceMock} from '../../../mock/authService.mock';
import {FormsModule} from '@angular/forms';
import {SnackbarService} from '../../../components/snackbar/services/snackbar/snackbar.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('LoginComponent', () => {
    let authService: AuthServiceMock;
    let loginMethodSpy: jasmine.Spy;

    let fixture: ComponentFixture<LoginComponent>;
    let component: LoginComponent;
    let host: HTMLElement;

    beforeEach(async () => {
        authService = new AuthServiceMock();

        await TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [FormsModule, RouterTestingModule],
            providers: [{provide: AuthService, useValue: authService}, SnackbarService],
        }).compileComponents();

        loginMethodSpy = spyOn(authService, 'login');
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
