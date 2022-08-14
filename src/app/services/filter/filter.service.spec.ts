import {TestBed} from '@angular/core/testing';

import {FilterService} from './filter.service';
import {RouterTestingModule} from '@angular/router/testing';
import {GameServiceMock} from '../../mock/gameService.mock';
import {GameService} from '../api/game/game.service';

describe('FilterService', () => {
    let service: FilterService;
    let gameServiceMock: GameServiceMock;

    beforeEach(() => {
        gameServiceMock = new GameServiceMock();

        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [FilterService, {provide: GameService, useValue: gameServiceMock}],
        });
        service = TestBed.inject(FilterService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
