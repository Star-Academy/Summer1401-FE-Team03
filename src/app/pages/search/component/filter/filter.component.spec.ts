import {FilterComponent} from './filter.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FilterService} from '../../../../services/filter/filter.service';
import {GameServiceMock} from '../../../../mock/gameService.mock';
import {GameService} from '../../../../services/api/game/game.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('FilterComponent', () => {
    let fixture: ComponentFixture<FilterComponent>;
    let component: FilterComponent;
    let gameServiceMock: GameServiceMock;
    let host: HTMLElement;

    beforeEach(async () => {
        gameServiceMock = new GameServiceMock();

        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [FilterComponent],
            providers: [FilterService, {provide: GameService, useValue: gameServiceMock}],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FilterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
