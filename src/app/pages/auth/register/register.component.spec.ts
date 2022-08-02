import {RegisterComponent} from './register.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthService} from '../../../services/api/auth/auth.service';
import {SnackbarService} from '../../../components/snackbar/services/snackbar/snackbar.service';
import {ApiService} from '../../../services/api/api.service';
import {FetchMock, VALID_USER_LOGIN_DATA, VALID_USER_REGISTER_DATA} from '../../../mock/fetch.mock';

describe('RegisterComponent', () => {
    let authService: AuthService;
    let snackbarService: SnackbarService;
    let fetchMock: FetchMock;

    let registerMethodSpy: jasmine.Spy;

    let fixture: ComponentFixture<RegisterComponent>;
    let component: RegisterComponent;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RegisterComponent],
            imports: [FormsModule, RouterTestingModule],
            providers: [AuthService, SnackbarService, ApiService],
        }).compileComponents();

        authService = TestBed.inject(AuthService);
        snackbarService = TestBed.inject(SnackbarService);

        fetchMock = new FetchMock();
        spyOn(window, 'fetch').and.callFake(fetchMock.fetch.bind(fetchMock));
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RegisterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should successfully call register method', () => {
        let registerMethodSpy = spyOn(authService, 'register');

        component.registerSubmitHandler();

        expect(registerMethodSpy).toHaveBeenCalled();
    });

    it('should successfully call snackbar show methode when registered', async () => {
        let showSnackbarMethodSpy = spyOn(snackbarService, 'show');

        component.user = VALID_USER_REGISTER_DATA;
        await component.registerSubmitHandler();

        expect(showSnackbarMethodSpy).toHaveBeenCalled();
    });
});
