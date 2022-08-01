import {CardsComponent} from './cards.component';
import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {Card} from '../../../../models/card.model';
import {By} from '@angular/platform-browser';

describe('CardsComponent', () => {
    let fixture: ComponentFixture<CardsComponent>;
    let component: CardsComponent;
    let host: HTMLElement;

    const TEST_CARDS: Card[] = [
        {src: 'test src', price: 0, alt: 'test alt', title: 'test title', description: 'test des'},
        {src: 'test src', price: 0, alt: 'test alt', title: 'test title', description: 'test des'},
    ];

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CardsComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CardsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should make two app-card', () => {
        component.cards = TEST_CARDS;

        fixture.detectChanges();

        let appCards = fixture.debugElement.queryAll(By.css('app-card'));

        expect(appCards.length).toEqual(component.cards.length);
    });

    // it('should scroll to left then right', fakeAsync(() => {
    //     let outerContainer = host.querySelector('.cards');
    //
    //     let currentScrollLeft = outerContainer?.scrollLeft;
    //
    //     component.scrollToLeft();
    //
    //     tick();
    //
    //     fixture.detectChanges();
    //
    //     let newScrollLeft = outerContainer?.scrollLeft;
    //
    //     expect(currentScrollLeft).not.toEqual(newScrollLeft);
    // }));
});
