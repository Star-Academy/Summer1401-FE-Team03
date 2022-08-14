import {ExpansionListComponent} from './expansion-list.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FilterService} from '../../../../../../services/filter/filter.service';
import {GameServiceMock} from '../../../../../../mock/gameService.mock';
import {GameService} from '../../../../../../services/api/game/game.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('ExpansionListComponent', () => {
    let fixture: ComponentFixture<ExpansionListComponent>;
    let component: ExpansionListComponent;
    let gameServiceMock: GameServiceMock;
    let host: HTMLElement;

    beforeEach(async () => {
        gameServiceMock = new GameServiceMock();

        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [ExpansionListComponent],
            providers: [FilterService, {provide: GameService, useValue: gameServiceMock}],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ExpansionListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
