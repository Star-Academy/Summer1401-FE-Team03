import {TestBed} from '@angular/core/testing';

import {CartService} from './cart.service';
import {SnackbarService} from '../../components/snackbar/services/snackbar/snackbar.service';
import {LocalStorageMock} from '../../mock/localStorage.mock';
import {VALID_GAMES_DATA} from '../../mock/fetch.mock';

describe('CartService', () => {
    let service: CartService;
    let localStorageMock: LocalStorageMock;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CartService, SnackbarService],
        });
        service = TestBed.inject(CartService);

        localStorageMock = new LocalStorageMock();
        spyOn(localStorage, 'getItem').and.callFake(localStorageMock.getItem.bind(localStorageMock));
        spyOn(localStorage, 'setItem').and.callFake(localStorageMock.setItem.bind(localStorageMock));
        spyOn(localStorage, 'removeItem').and.callFake(localStorageMock.removeItem.bind(localStorageMock));
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should add game', () => {
        service.addToList(VALID_GAMES_DATA[0]);

        expect(service.cartGames.length).not.toBe(0);
    });

    it('should remove game', () => {
        service.addToList(VALID_GAMES_DATA[0]);
        service.removeFromList(VALID_GAMES_DATA[0].id);

        expect(service.cartGames.length).toBe(0);
    });

    it('should not remove game', () => {
        service.addToList(VALID_GAMES_DATA[0]);
        service.removeFromList(VALID_GAMES_DATA[0].id + 3);

        expect(service.cartGames.length).not.toBe(0);
    });

    it('should clear list', () => {
        service.addToList(VALID_GAMES_DATA[0]);
        service.addToList(VALID_GAMES_DATA[1]);

        service.clearList();

        expect(service.cartGames.length).toBe(0);
    });

    it('should get all items', () => {
        service.addToList(VALID_GAMES_DATA[0]);
        service.addToList(VALID_GAMES_DATA[1]);

        const items = service.getAllList();

        expect(items.length).toBe(service.cartGames.length);
    });
});
