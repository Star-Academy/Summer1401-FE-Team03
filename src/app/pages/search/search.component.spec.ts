import {SearchComponent} from './search.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {GameServiceMock} from '../../mock/gameService.mock';
import {GameService} from '../../services/api/game/game.service';
import {FilterService} from '../../services/filter/filter.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('SearchComponent', () => {
    let fixture: ComponentFixture<SearchComponent>;
    let component: SearchComponent;
    let gameServiceMock: GameServiceMock;
    let host: HTMLElement;

    beforeEach(async () => {
        gameServiceMock = new GameServiceMock();

        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [SearchComponent],
            providers: [FilterService, {provide: GameService, useValue: gameServiceMock}],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
