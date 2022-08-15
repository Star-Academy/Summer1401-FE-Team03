import {ProfileComponent} from './profile.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AuthServiceMock} from '../../mock/authService.mock';
import {AuthService} from '../../services/api/auth/auth.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('ProfileComponent', () => {
    let fixture: ComponentFixture<ProfileComponent>;
    let component: ProfileComponent;
    let authServiceMock: AuthServiceMock;
    let host: HTMLElement;

    beforeEach(async () => {
        authServiceMock = new AuthServiceMock();

        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [ProfileComponent],
            providers: [{provide: AuthService, useValue: authServiceMock}],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ProfileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
