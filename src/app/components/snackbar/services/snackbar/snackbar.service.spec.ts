import {SnackbarService} from './snackbar.service';
import {fakeAsync, TestBed, tick} from '@angular/core/testing';
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
        expect(service.isShown).toBeTrue();
        expect(service.message).toEqual('test message');
    });

    it('should unset values to hide snackbar', () => {
        service.snackbarCloseHandler();

        expect(service.type).toBeNull();
        expect(service.isShown).toBeFalse();
        expect(service.message).toBeNull();
    });

    it('should disappear after 4000ms', fakeAsync(() => {
        service.show('test message', SnackbarTypes.Error);

        tick(4000);

        expect(service.isShown).toBeFalse();
        expect(service.message).toBeNull();
    }));
});
