import {SearchComponent} from './search.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';

describe('SearchComponent', () => {
    let fixture: ComponentFixture<SearchComponent>;
    let component: SearchComponent;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SearchComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
