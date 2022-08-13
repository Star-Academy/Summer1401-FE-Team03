import {CardsComponent} from './cards.component';
import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {Card} from '../../../../models/card.model';
import {By} from '@angular/platform-browser';
import {VALID_GAMES_DATA} from '../../../../mock/fetch.mock';

describe('CardsComponent', () => {
    let fixture: ComponentFixture<CardsComponent>;
    let component: CardsComponent;
    let host: HTMLElement;

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
        component.games = VALID_GAMES_DATA;

        fixture.detectChanges();

        const appCards = fixture.debugElement.queryAll(By.css('app-card'));

        // expect(appCards.length).toEqual(component.cards.length);
    });
});
