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
});
