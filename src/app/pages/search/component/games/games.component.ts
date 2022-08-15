import {Component, Input, OnInit} from '@angular/core';
import {GameModel} from '../../../../models/game/game.model';
import {GameService} from '../../../../services/api/game/game.service';
import {FilterService} from '../../../../services/filter/filter.service';

@Component({
    selector: 'app-games',
    templateUrl: './games.component.html',
    styleUrls: ['./games.component.scss'],
})
export class GamesComponent {
    @Input() public games: GameModel[] = [];

    public constructor(public gameService: GameService, public filterService: FilterService) {}
}
