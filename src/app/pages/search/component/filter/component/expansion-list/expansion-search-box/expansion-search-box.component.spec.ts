import {ExpansionSearchBoxComponent} from './expansion-search-box.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';

describe('ExpansionSearchBoxComponent', () => {
    let fixture: ComponentFixture<ExpansionSearchBoxComponent>;
    let component: ExpansionSearchBoxComponent;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ExpansionSearchBoxComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ExpansionSearchBoxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
