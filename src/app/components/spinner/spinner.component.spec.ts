import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SpinnerComponent} from './spinner.component';
import {SpinnerService} from './service/spinner/spinner.service';

describe('SpinnerComponent', () => {
    let component: SpinnerComponent;
    let fixture: ComponentFixture<SpinnerComponent>;
    let host: HTMLElement;
    let spinnerService: SpinnerService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SpinnerComponent],
            providers: [SpinnerService],
        }).compileComponents();

        spinnerService = TestBed.inject(SpinnerService);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SpinnerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show spinner', () => {
        spinnerService.show();

        fixture.detectChanges();

        const div = host.querySelector('.wrapper > div');
        expect(div).toBeTruthy();
    });
});
