import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AlterCreditComponent} from './alter-credit.component';
import {SnackbarService} from '../../../../components/snackbar/services/snackbar/snackbar.service';
import {AuthServiceMock} from '../../../../mock/authService.mock';
import {AuthService} from '../../../../services/api/auth/auth.service';

describe('AlterCreditComponent', () => {
    let component: AlterCreditComponent;
    let fixture: ComponentFixture<AlterCreditComponent>;
    let authServiceMock: AuthServiceMock;

    beforeEach(async () => {
        authServiceMock = new AuthServiceMock();

        await TestBed.configureTestingModule({
            declarations: [AlterCreditComponent],
            providers: [SnackbarService, {provide: AuthService, useValue: authServiceMock}],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AlterCreditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
