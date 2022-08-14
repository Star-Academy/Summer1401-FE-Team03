import {ExpansionListComponent} from './expansion-list.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';

describe('ExpansionListComponent', () => {
    let fixture: ComponentFixture<ExpansionListComponent>;
    let component: ExpansionListComponent;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ExpansionListComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ExpansionListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
