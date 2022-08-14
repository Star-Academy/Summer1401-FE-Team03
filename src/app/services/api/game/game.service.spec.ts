import {GameService} from './game.service';
import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {ApiService} from '../api.service';
import {SnackbarService} from '../../../components/snackbar/services/snackbar/snackbar.service';
import {SpinnerService} from '../../../components/spinner/service/spinner/spinner.service';
import {FetchMock} from '../../../mock/fetch.mock';

describe('GameService', () => {
    let service: GameService;
    let fetchMock: FetchMock;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [GameService, ApiService, SnackbarService, SpinnerService],
        });
        service = TestBed.inject(GameService);

        fetchMock = new FetchMock();
        spyOn(window, 'fetch').and.callFake(fetchMock.fetch.bind(fetchMock));
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should search games', async () => {
        await service.search({pageSize: 12, sort: 2, offset: 0}, false);

        expect(service.games.length).not.toBe(0);
    });

    it('should get genres', async () => {
        const genres = await service.genres();

        expect(genres?.length).not.toBe(0);
    });

    it('should get game', async () => {
        const game = await service.getGame(1);

        expect(game).toBeTruthy();
    });

    it('should get upcoming', async () => {
        const games = await service.getUpcoming();

        expect(games.length).not.toBe(0);
    });
});
