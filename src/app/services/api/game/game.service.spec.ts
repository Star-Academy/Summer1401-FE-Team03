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
});
