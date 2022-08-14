import {CardComponent} from './card.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CartService} from '../../services/cart/cart.service';
import {SnackbarService} from '../snackbar/services/snackbar/snackbar.service';
import {ImageSourceModule} from '../../pipes/image-source/image-source.module';
import {VALID_GAMES_DATA} from '../../mock/fetch.mock';

describe('CardComponent', () => {
    let fixture: ComponentFixture<CardComponent>;
    let component: CardComponent;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ImageSourceModule],
            declarations: [CardComponent],
            providers: [CartService, SnackbarService],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CardComponent);
        component = fixture.componentInstance;
        component.game = VALID_GAMES_DATA[0];
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show game summery ', () => {
        const p = host.querySelector('.card-body > p');

        expect(component).toBeTruthy();
        expect(p?.innerHTML).toEqual(VALID_GAMES_DATA[0].summary);
    });
});
