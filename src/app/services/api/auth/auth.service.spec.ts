import {AuthService} from './auth.service';
import {LocalStorageMock} from '../../../mock/localStorage.mock';
import {FetchMock, VALID_TOKEN, VALID_USER_LOGIN_DATA, VALID_USER_REGISTER_DATA} from '../../../mock/fetch.mock';
import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {SnackbarService} from '../../../components/snackbar/services/snackbar/snackbar.service';
import {ApiService} from '../api.service';

describe('AuthService', () => {
    let service: AuthService;
    let localStorageMock: LocalStorageMock;
    let fetchMock: FetchMock;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [AuthService, SnackbarService, ApiService],
        });

        localStorageMock = new LocalStorageMock();
        spyOn(localStorage, 'getItem').and.callFake(localStorageMock.getItem.bind(localStorageMock));
        spyOn(localStorage, 'setItem').and.callFake(localStorageMock.setItem.bind(localStorageMock));
        spyOn(localStorage, 'removeItem').and.callFake(localStorageMock.removeItem.bind(localStorageMock));

        fetchMock = new FetchMock();
        spyOn(window, 'fetch').and.callFake(fetchMock.fetch.bind(fetchMock));

        service = TestBed.inject(AuthService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should login successfully', async () => {
        await service.login(VALID_USER_LOGIN_DATA);

        expect(service.isUserLoggedIn).toBeTrue();
    });

    it('should register successfully', async () => {
        await service.register(VALID_USER_REGISTER_DATA);

        expect(service.isUserLoggedIn).toBeTrue();
    });

    it('should be a valid user', async () => {
        localStorageMock.setItem('token', VALID_TOKEN);
        debugger;
        await service.auth();

        expect(service.isUserLoggedIn).toBeTrue();
    });

    it('should fail to login', async () => {
        await service.login({username: 'bad ata', password: '122'});

        expect(service.isUserLoggedIn).toBeFalse();
    });

    it('should be a invalid user', async () => {
        localStorageMock.setItem('token', '1234');

        await service.auth();

        expect(service.isUserLoggedIn).toBeFalse();
    });

    it('should logout', async () => {
        service.isUserLoggedIn = true;

        await service.logout();

        expect(service.isUserLoggedIn).toBeFalse();
    });
});
