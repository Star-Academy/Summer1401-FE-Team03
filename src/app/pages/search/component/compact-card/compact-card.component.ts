import {Component, Input, OnInit} from '@angular/core';
import {GameModel} from '../../../../models/game/game.model';

@Component({
    selector: 'app-compact-card',
    templateUrl: './compact-card.component.html',
    styleUrls: ['./compact-card.component.scss'],
})
export class CompactCardComponent {
    @Input() public game!: GameModel;
}
