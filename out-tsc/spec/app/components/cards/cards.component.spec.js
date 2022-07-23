import { TestBed } from '@angular/core/testing';
import { CardsComponent } from './cards.component';
describe('CardsComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CardsComponent],
        }).compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(CardsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=cards.component.spec.js.map