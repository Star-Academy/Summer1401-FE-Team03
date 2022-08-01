import {ApiService} from './api.service';
import {LocalStorageMock} from '../../mock/localStorage.mock';
import {FetchMock, TEST_URL} from '../../mock/fetch.mock';
import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {SnackbarService} from '../../components/snackbar/services/snackbar/snackbar.service';

describe('ApiService', () => {
    let service: ApiService;
    let fetchMock: FetchMock;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [SnackbarService, ApiService],
        });

        fetchMock = new FetchMock();
        spyOn(window, 'fetch').and.callFake(fetchMock.fetch.bind(fetchMock));

        service = TestBed.inject(ApiService);
    });

    it('should create', () => {
        expect(service).toBeTruthy();
    });

    it('should post request', async () => {
        const response = await service.PostRequest<any>({url: TEST_URL, body: {}});

        expect(response.isOk).toBeTrue();
    });

    it('should get request', async () => {
        const response = await service.GetRequest<any>({url: TEST_URL});

        expect(response.isOk).toBeTrue();
    });

    it('should fail post request', async () => {
        const response = await service.PostRequest<any>({url: '/fail', body: {}});

        expect(response).toBeNull();
    });

    it('should fail get request', async () => {
        const response = await service.GetRequest<any>({url: '/fail'});

        expect(response).toBeNull();
    });
});
