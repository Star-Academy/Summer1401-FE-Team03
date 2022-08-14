import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GameComponent} from './game.component';
import {GameService} from '../../services/api/game/game.service';
import {ApiService} from '../../services/api/api.service';
import {SnackbarService} from '../../components/snackbar/services/snackbar/snackbar.service';
import {SpinnerService} from '../../components/spinner/service/spinner/spinner.service';
import {RouterTestingModule} from '@angular/router/testing';
import {ImageSourceModule} from '../../pipes/image-source/image-source.module';
import {JalaliCalendarModule} from '../../pipes/jalali-calendar/jalali-calendar.module';
import {AgeCategoryModule} from '../../pipes/age-category/age-category.module';
import {AgeCategoryTypeModule} from '../../pipes/age-category-type/age-category-type.module';
import {CartService} from '../../services/cart/cart.service';
import {LocalStorageMock} from '../../mock/localStorage.mock';
import {FetchMock, VALID_GAMES_DATA} from '../../mock/fetch.mock';
import {host} from '@angular-devkit/build-angular/src/test-utils';
import {ToSlideshowItemModule} from '../../pipes/to-slideshow-item/to-slideshow-item.module';
import {GameServiceMock} from '../../mock/gameService.mock';

describe('GameComponent', () => {
    let component: GameComponent;
    let fixture: ComponentFixture<GameComponent>;
    let localStorageMock: LocalStorageMock;
    let gameServiceMock: GameServiceMock;
    let host: HTMLElement;
    let routerMock: RouterTestingModule;

    beforeEach(async () => {
        localStorageMock = new LocalStorageMock();
        gameServiceMock = new GameServiceMock();

        await TestBed.configureTestingModule({
            declarations: [GameComponent],
            imports: [
                RouterTestingModule,
                ImageSourceModule,
                JalaliCalendarModule,
                AgeCategoryModule,
                AgeCategoryTypeModule,
                ToSlideshowItemModule,
            ],
            providers: [
                {provide: GameService, useValue: gameServiceMock},
                CartService,
                SnackbarService,
                SpinnerService,
            ],
        }).compileComponents();

        routerMock = TestBed.inject(RouterTestingModule);

        spyOn(localStorage, 'getItem').and.callFake(localStorageMock.getItem.bind(localStorageMock));
        spyOn(localStorage, 'setItem').and.callFake(localStorageMock.setItem.bind(localStorageMock));
        spyOn(localStorage, 'removeItem').and.callFake(localStorageMock.removeItem.bind(localStorageMock));
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(GameComponent);
        component = fixture.componentInstance;
        component.game = VALID_GAMES_DATA[0];
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show summery', () => {
        const pSummery = host.querySelector('.content p');

        expect(pSummery?.innerHTML).toBe(VALID_GAMES_DATA[0].summary);
    });
});
