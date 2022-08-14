import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TwoWayRangeComponent} from './two-way-range.component';
import {GameServiceMock} from '../../../../../../mock/gameService.mock';
import {RouterTestingModule} from '@angular/router/testing';
import {FilterService} from '../../../../../../services/filter/filter.service';
import {GameService} from '../../../../../../services/api/game/game.service';

describe('TwoWayRangeComponent', () => {
    let component: TwoWayRangeComponent;
    let gameServiceMock: GameServiceMock;
    let fixture: ComponentFixture<TwoWayRangeComponent>;

    beforeEach(async () => {
        gameServiceMock = new GameServiceMock();

        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [TwoWayRangeComponent],
            providers: [FilterService, {provide: GameService, useValue: gameServiceMock}],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TwoWayRangeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
