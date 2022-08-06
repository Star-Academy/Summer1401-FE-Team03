import {Component, Input, OnInit} from '@angular/core';
import {GameModel} from '../../../../models/game/game.model';

@Component({
    selector: 'app-games',
    templateUrl: './games.component.html',
    styleUrls: ['./games.component.scss'],
})
export class GamesComponent {
    @Input() public games: GameModel[] = [];
}
