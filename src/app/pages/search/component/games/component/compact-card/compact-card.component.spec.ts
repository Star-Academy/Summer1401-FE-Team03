import {CompactCardComponent} from './compact-card.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CartService} from '../../../../../../services/cart/cart.service';
import {CartServiceMock} from '../../../../../../mock/cartService.mock';
import {VALID_GAMES_DATA} from '../../../../../../mock/fetch.mock';
import {DiscountPipeModule} from '../../../../../../pipes/discount-pipe/discount-pipe.module';

describe('CompactCardComponent', () => {
    let fixture: ComponentFixture<CompactCardComponent>;
    let component: CompactCardComponent;
    let cartServiceMock: CartServiceMock;
    let host: HTMLElement;

    beforeEach(async () => {
        cartServiceMock = new CartServiceMock();

        await TestBed.configureTestingModule({
            imports: [DiscountPipeModule],
            declarations: [CompactCardComponent],
            providers: [{provide: CartService, useValue: cartServiceMock}],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CompactCardComponent);
        component = fixture.componentInstance;
        component.game = VALID_GAMES_DATA[0];
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
