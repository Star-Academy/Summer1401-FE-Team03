import {TestBed} from '@angular/core/testing';

import {CartService} from './cart.service';
import {SnackbarService} from '../../components/snackbar/services/snackbar/snackbar.service';

describe('CartService', () => {
    let service: CartService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CartService, SnackbarService],
        });
        service = TestBed.inject(CartService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
