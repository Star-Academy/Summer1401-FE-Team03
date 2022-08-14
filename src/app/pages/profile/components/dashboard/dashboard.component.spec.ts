import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardComponent} from './dashboard.component';
import {AuthService} from '../../../../services/api/auth/auth.service';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthServiceMock} from '../../../../mock/authService.mock';

describe('DashboardComponent', () => {
    let component: DashboardComponent;
    let authServiceMock: AuthServiceMock;
    let fixture: ComponentFixture<DashboardComponent>;

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
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
