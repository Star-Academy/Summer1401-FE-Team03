import {TestBed} from '@angular/core/testing';

import {LibraryService} from './library.service';
import {AuthService} from '../auth/auth.service';
import {ApiService} from '../api.service';
import {AuthServiceMock} from '../../../mock/authService.mock';
import {FetchMock, VALID_GAMES_DATA} from '../../../mock/fetch.mock';
import {SnackbarService} from '../../../components/snackbar/services/snackbar/snackbar.service';
import {SpinnerService} from '../../../components/spinner/service/spinner/spinner.service';

describe('LibraryService', () => {
    let service: LibraryService;
    let authServiceMock: AuthServiceMock;
    let fetchMock: FetchMock;

    beforeEach(() => {
        authServiceMock = new AuthServiceMock();

        TestBed.configureTestingModule({
            providers: [
                LibraryService,
                {provide: AuthService, useValue: authServiceMock},
                ApiService,
                SnackbarService,
                SpinnerService,
            ],
        });
        service = TestBed.inject(LibraryService);

        fetchMock = new FetchMock();
        spyOn(window, 'fetch').and.callFake(fetchMock.fetch.bind(fetchMock));
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should add successfully', async () => {
        const result = await service.addGame(1);

        expect(result).toBeTrue();
    });

    it('should get all successfully', async () => {
        await service.getAll();

        expect(service.games.length).not.toBe(0);
    });

    it('should add all successfully', async () => {
        const result = await service.addAll(VALID_GAMES_DATA);

        expect(result).toBeTrue();
    });

    it('should remove successfully', async () => {
        const result = await service.addGame(1);
        const removeResult = await service.removeGame(1);

        expect(result).toBeTrue();
        expect(removeResult).toBeTrue();
        expect(service.games.length).toBe(0);
    });
});
