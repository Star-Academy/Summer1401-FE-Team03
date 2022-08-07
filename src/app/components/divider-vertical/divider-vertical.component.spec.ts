import {DividerVerticalComponent} from './divider-vertical.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';

describe('DividerVerticalComponent', () => {
    let fixture: ComponentFixture<DividerVerticalComponent>;
    let component: DividerVerticalComponent;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DividerVerticalComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DividerVerticalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have i tag', () => {
        const line = host.querySelector('i');

        expect(line).toBeTruthy();
    });
});
