import {SearchBoxComponent} from './search-box.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';

describe('SearchBoxComponent', () => {
    let fixture: ComponentFixture<SearchBoxComponent>;
    let component: SearchBoxComponent;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SearchBoxComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchBoxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have i tag specified class name ', () => {
        const searchIcon = host.querySelector('i');

        expect(searchIcon).toBeTruthy();
        expect(searchIcon?.className).toEqual('far fa-magnifying-glass');
    });

    it('should be search type', () => {
        const input = host.querySelector('input');

        expect(input?.type).toEqual('search');
    });
});
