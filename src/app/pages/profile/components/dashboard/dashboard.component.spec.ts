import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardComponent} from './dashboard.component';
import {AuthService} from '../../../../services/api/auth/auth.service';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthServiceMock} from '../../../../mock/authService.mock';
import {VALID_USER_LOGIN_DATA} from '../../../../mock/fetch.mock';
import {AlterRequestModel} from '../../../../models/api/alter/alter-request.model';
import {By} from '@angular/platform-browser';

describe('DashboardComponent', () => {
    let component: DashboardComponent;
    let authServiceMock: AuthServiceMock;
    let fixture: ComponentFixture<DashboardComponent>;
    let host: HTMLElement;

    beforeEach(async () => {
        authServiceMock = new AuthServiceMock();

        await TestBed.configureTestingModule({
            declarations: [DashboardComponent],
            imports: [RouterTestingModule],
            providers: [{provide: AuthService, useValue: authServiceMock}],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        component.data.dateOfBirth = new Date();
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should set null user to data', () => {
        expect(component.data.credit).toBeFalsy();
    });

    describe('login User', () => {
        beforeEach(() => {
            authServiceMock.login(VALID_USER_LOGIN_DATA);
        });

        it('should call submit form handler', () => {
            const button = host.querySelector('button');
            component.formSubmitHandler = jasmine.createSpy();

            button?.click();

            expect(component.formSubmitHandler).toHaveBeenCalled();
        });

        it('should alter user', async () => {
            component.data = {
                firstName: 'ata update',
                lastName: 'ata lastName',
                username: 'ata userName',
                email: 'ata email',
                credit: 1,
                avatar: 'test avatar',
                phone: '0912',
                dateOfBirth: new Date(),
            };

            await component.formSubmitHandler();

            expect(authServiceMock.cachedUser?.firstName).toEqual('ata update');
        });

        it('should alter user', async () => {
            component.data = {
                firstName: undefined,
                lastName: undefined,
                username: undefined,
                email: undefined,
                credit: undefined,
                avatar: undefined,
                phone: undefined,
                dateOfBirth: undefined,
            };

            await component.formSubmitHandler();

            expect(authServiceMock.cachedUser?.firstName).toEqual('');
        });
    });
});
