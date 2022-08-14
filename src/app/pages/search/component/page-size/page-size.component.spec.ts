import {PageSizeComponent} from './page-size.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {GameServiceMock} from '../../../../mock/gameService.mock';
import {RouterTestingModule} from '@angular/router/testing';
import {FilterService} from '../../../../services/filter/filter.service';
import {GameService} from '../../../../services/api/game/game.service';

describe('PageSizeComponent', () => {
    let fixture: ComponentFixture<PageSizeComponent>;
    let component: PageSizeComponent;
    let gameServiceMock: GameServiceMock;
    let host: HTMLElement;

    beforeEach(async () => {
        gameServiceMock = new GameServiceMock();

        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [PageSizeComponent],
            providers: [FilterService, {provide: GameService, useValue: gameServiceMock}],
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
