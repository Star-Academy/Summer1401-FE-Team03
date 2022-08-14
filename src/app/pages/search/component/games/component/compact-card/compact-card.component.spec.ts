import {CompactCardComponent} from './compact-card.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';

describe('CompactCardComponent', () => {
    let fixture: ComponentFixture<CompactCardComponent>;
    let component: CompactCardComponent;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CompactCardComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CompactCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
