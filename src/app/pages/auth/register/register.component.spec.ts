import {RegisterComponent} from './register.component';
import {AuthServiceMock} from '../../../mock/authService.mock';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthService} from '../../../services/api/auth/auth.service';
import {SnackbarService} from '../../../components/snackbar/services/snackbar/snackbar.service';
import {RegisterRequestModel} from '../../../models/api/register-request.model';

describe('RegisterComponent', () => {
    let authService: AuthServiceMock;
    let registerMethodSpy: jasmine.Spy;

    let fixture: ComponentFixture<RegisterComponent>;
    let component: RegisterComponent;
    let host: HTMLElement;

    beforeEach(async () => {
        authService = new AuthServiceMock();

        await TestBed.configureTestingModule({
            declarations: [RegisterComponent],
            imports: [FormsModule, RouterTestingModule],
            providers: [{provide: AuthService, useValue: authService}, SnackbarService],
        }).compileComponents();

        registerMethodSpy = spyOn(authService, 'register');
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

    it('should change email value', () => {});

    it('should successfully call register method', () => {
        component.registerSubmitHandler();

        expect(registerMethodSpy).toHaveBeenCalled();
    });
});
