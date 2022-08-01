import {SnackbarService} from './snackbar.service';
import {TestBed} from '@angular/core/testing';
import {SnackbarTypes} from '../../../../models/enum/snackbar.types';

describe('SnackbarService', () => {
    let service: SnackbarService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [SnackbarService],
        });
        service = TestBed.inject(SnackbarService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should set values to show', () => {
        service.show('test message', SnackbarTypes.Error);

        expect(service.type).toEqual(SnackbarTypes.Error);
        expect(service.isShown).toEqual(true);
        expect(service.message).toEqual('test message');
    });

    it('should unset values to hide snackbar', () => {
        service.snackbarCloseHandler();

        expect(service.type).toEqual(null);
        expect(service.isShown).toEqual(false);
        expect(service.message).toEqual(null);
    });
});
