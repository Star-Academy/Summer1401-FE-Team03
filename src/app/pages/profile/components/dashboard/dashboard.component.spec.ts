import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardComponent} from './dashboard.component';
import {AuthService} from '../../../../services/api/auth/auth.service';
import {RouterTestingModule} from '@angular/router/testing';
import {ApiService} from '../../../../services/api/api.service';
import {SnackbarService} from '../../../../components/snackbar/services/snackbar/snackbar.service';
import {SpinnerService} from '../../../../components/spinner/service/spinner/spinner.service';

describe('DashboardComponent', () => {
    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DashboardComponent],
            imports: [RouterTestingModule],
            providers: [AuthService, ApiService, SnackbarService, SpinnerService],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
