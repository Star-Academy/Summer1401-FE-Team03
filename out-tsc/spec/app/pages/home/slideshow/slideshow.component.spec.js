import { TestBed } from '@angular/core/testing';
import { SlideshowComponent } from './slideshow.component';
describe('SlideshowComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SlideshowComponent],
        }).compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(SlideshowComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=slideshow.component.spec.js.map