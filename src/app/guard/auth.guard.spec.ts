import {AuthGuard} from './auth.guard';
import {AuthServiceMock} from '../mock/authService.mock';
import {TestBed} from '@angular/core/testing';
import {AuthService} from '../services/api/auth/auth.service';
import {ApiService} from '../services/api/api.service';
import {SnackbarService} from '../components/snackbar/services/snackbar/snackbar.service';
import {RouterTestingModule} from '@angular/router/testing';
import {Router, RouterStateSnapshot} from '@angular/router';

function mockRouterState(url: string): RouterStateSnapshot {
    return {
        url,
    } as RouterStateSnapshot;
}

describe('AuthGuard', () => {
    let authGuard: AuthGuard;
    let authService: AuthService;
    let routerSpy: jasmine.SpyObj<Router>;
    let apiService: ApiService;
    let snackbarService: SnackbarService;

    beforeEach(() => {
        snackbarService = new SnackbarService();
        apiService = new ApiService(snackbarService);
        routerSpy = jasmine.createSpyObj<Router>('Router', ['navigate']);
        authService = new AuthService(routerSpy, apiService);
        authGuard = new AuthGuard(routerSpy, authService);

        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [{provide: AuthService, useValue: authService}, ApiService, SnackbarService],
        }).compileComponents();
    });

    it('should be create', function () {
        expect(authGuard).toBeTruthy();
    });
});
