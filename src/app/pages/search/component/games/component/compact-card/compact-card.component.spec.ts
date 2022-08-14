import {CompactCardComponent} from './compact-card.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CartService} from '../../../../../../services/cart/cart.service';
import {VALID_GAMES_DATA} from '../../../../../../mock/fetch.mock';
import {DiscountPipeModule} from '../../../../../../pipes/discount-pipe/discount-pipe.module';
import {SnackbarService} from '../../../../../../components/snackbar/services/snackbar/snackbar.service';

describe('CompactCardComponent', () => {
    let fixture: ComponentFixture<CompactCardComponent>;
    let component: CompactCardComponent;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DiscountPipeModule],
            declarations: [CompactCardComponent],
            providers: [CartService, SnackbarService],
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
