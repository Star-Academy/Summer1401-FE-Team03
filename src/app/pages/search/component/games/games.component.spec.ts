import {GamesComponent} from './games.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {GameServiceMock} from '../../../../mock/gameService.mock';
import {FilterService} from '../../../../services/filter/filter.service';
import {GameService} from '../../../../services/api/game/game.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('GamesComponent', () => {
    let fixture: ComponentFixture<GamesComponent>;
    let component: GamesComponent;
    let gameServiceMock: GameServiceMock;
    let host: HTMLElement;

    beforeEach(async () => {
        gameServiceMock = new GameServiceMock();

        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [GamesComponent],
            providers: [FilterService, {provide: GameService, useValue: gameServiceMock}],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(GamesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
