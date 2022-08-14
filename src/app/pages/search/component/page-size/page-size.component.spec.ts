import {PageSizeComponent} from './page-size.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';

describe('PageSizeComponent', () => {
    let fixture: ComponentFixture<PageSizeComponent>;
    let component: PageSizeComponent;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PageSizeComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PageSizeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
