import {AuthGuard} from './auth.guard';
import {AuthServiceMock} from '../mock/authService.mock';
import {TestBed} from '@angular/core/testing';
import {AuthService} from '../services/api/auth/auth.service';
import {ApiService} from '../services/api/api.service';
import {SnackbarService} from '../components/snackbar/services/snackbar/snackbar.service';
import {RouterTestingModule} from '@angular/router/testing';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {FetchMock, VALID_USER_LOGIN_DATA} from '../mock/fetch.mock';

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
    let fetchMock: FetchMock;

    let routeMock = (path: string): ActivatedRouteSnapshot => {
        return {routeConfig: {path: path}} as ActivatedRouteSnapshot;
    };
    let stateMock = {} as RouterStateSnapshot;

    beforeEach(() => {
        snackbarService = new SnackbarService();
        apiService = new ApiService(snackbarService);
        routerSpy = jasmine.createSpyObj<Router>('Router', ['navigateByUrl']);
        authService = new AuthService(routerSpy, apiService);
        authGuard = new AuthGuard(routerSpy, authService);

        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [{provide: AuthService, useValue: authService}, ApiService, SnackbarService],
        }).compileComponents();

        fetchMock = new FetchMock();
        spyOn(window, 'fetch').and.callFake(fetchMock.fetch.bind(fetchMock));
    });

    it('should be create', function () {
        expect(authGuard).toBeTruthy();
    });

    describe('when user logged in', () => {
        beforeEach(async () => {
            await authService.login(VALID_USER_LOGIN_DATA);
        });

        it('should redirected to home when navigate to login page', async () => {
            const response = await authGuard.canActivate(routeMock('login'), stateMock);

            expect(response).toBeFalse();
        });

        it('should redirected to home when navigate to register page', async () => {
            const response = await authGuard.canActivate(routeMock('register'), stateMock);

            expect(response).toBeFalse();
        });

        it('should not redirected when navigate to profile page', async () => {
            const response = await authGuard.canActivate(routeMock('profile'), stateMock);

            expect(response).toBeTrue();
        });
    });

    describe('when user not logged in', () => {
        beforeEach(async () => {
            await authService.logout();
        });

        it('should not redirected to home when navigate to login page', async () => {
            const response = await authGuard.canActivate(routeMock('login'), stateMock);

            expect(response).toBeTrue();
        });

        it('should not redirected to home when navigate to register page', async () => {
            const response = await authGuard.canActivate(routeMock('register'), stateMock);

            expect(response).toBeTrue();
        });

        it('should redirected when navigate to profile page', async () => {
            const response = await authGuard.canActivate(routeMock('profile'), stateMock);

            expect(response).toBeFalse();
        });
    });
});
