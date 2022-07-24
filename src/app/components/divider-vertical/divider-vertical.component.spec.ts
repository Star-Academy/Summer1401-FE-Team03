import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DividerVerticalComponent} from './divider-vertical.component';

describe('DividerVerticalComponent', () => {
    let component: DividerVerticalComponent;
    let fixture: ComponentFixture<DividerVerticalComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DividerVerticalComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DividerVerticalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
