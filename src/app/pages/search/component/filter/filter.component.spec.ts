import {FilterComponent} from './filter.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';

describe('FilterComponent', () => {
    let fixture: ComponentFixture<FilterComponent>;
    let component: FilterComponent;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FilterComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FilterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
