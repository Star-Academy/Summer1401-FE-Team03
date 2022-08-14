import {TestBed} from '@angular/core/testing';

import {SpinnerService} from './spinner.service';

describe('SpinnerService', () => {
    let service: SpinnerService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [SpinnerService],
        });
        service = TestBed.inject(SpinnerService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should hide spinner', () => {
        service.show();
        expect(service.counter).toBe(1);

        service.hide();
        expect(service.counter).toBe(0);
    });

    it('should do nothing', () => {
        service.hide();
        expect(service.counter).toBe(0);
    });

    it('should wrap async a method', () => {
        const sampleMethod = jasmine.createSpy();

        service.wrapAsync(sampleMethod);

        expect(sampleMethod).toHaveBeenCalled();
    });
});
