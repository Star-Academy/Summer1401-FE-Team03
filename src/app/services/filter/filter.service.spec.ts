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

    describe('set and delete Genre', () => {
        it('should set genre in empty filter', () => {
            service.options.filters = undefined;

            service.setGenre(1);

            expect(JSON.stringify(service.options.filters)).toEqual(JSON.stringify({genres: [1]}));
        });

        it('should set genre in non empty filter', () => {
            service.options.filters = {genres: undefined};

            service.setGenre(1);

            expect(service.options.filters.genres).toEqual([1]);
        });

        it('should set genre in non empty filter and non empty genre array', () => {
            service.options.filters = {genres: [2]};

            service.setGenre(1);

            expect(service.options.filters.genres).toEqual([2, 1]);
        });

        it('should set genre in non empty filter and non empty genre array', () => {
            service.options.filters = {genres: [2]};

            service.deleteGenre(2);

            expect(service.options.filters.genres).toEqual([]);
        });
    });

    describe('set max and min rate', () => {
        it('should set maximum rate in empty filter', () => {
            service.options.filters = undefined;

            service.maxRate(6);

            expect(JSON.stringify(service.options.filters)).toEqual(JSON.stringify({maximumRating: 6}));
        });

        it('should update maximum rate value', () => {
            service.options.filters = {maximumRating: 6};

            service.maxRate(5);

            expect(service.options.filters.maximumRating).toEqual(5);
        });

        it('should set minimum rate in empty filter', () => {
            service.options.filters = undefined;

            service.minRate(6);

            expect(JSON.stringify(service.options.filters)).toEqual(JSON.stringify({minimumRating: 6}));
        });

        it('should update minimum rate value', () => {
            service.options.filters = {minimumRating: 6};

            service.minRate(5);

            expect(service.options.filters.minimumRating).toEqual(5);
        });
    });
});
