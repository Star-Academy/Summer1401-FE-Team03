import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PrimaryButtonComponent} from './primary-button.component';

describe('PrimaryButtonComponent', () => {
    let component: PrimaryButtonComponent;
    let fixture: ComponentFixture<PrimaryButtonComponent>;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PrimaryButtonComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PrimaryButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show spinner', () => {
        component.isLoading = true;
        fixture.detectChanges();

        const p = host.querySelector('p');
        const i = host.querySelector('i');

        expect(p).toBeFalsy();
        expect(i).toBeTruthy();
    });

    it('should not show spinner', () => {
        const TEST_LABEL = 'test label';

        component.label = TEST_LABEL;
        component.isLoading = false;
        fixture.detectChanges();

        const p = host.querySelector('p');

        expect(p).toBeTruthy();
        expect(p?.innerText).toBe(TEST_LABEL);
    });
});
