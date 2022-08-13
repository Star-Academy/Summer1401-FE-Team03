import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GameService} from '../../services/api/game/game.service';
import {GameModel} from '../../models/game/game.model';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
    public game!: GameModel;

    public constructor(private route: ActivatedRoute, public gameService: GameService) {}

    public async ngOnInit(): Promise<void> {
        window.scrollTo(0, 0);
        const idString = this.route.snapshot.paramMap.get('id');
        if (idString) {
            const id = parseInt(idString);
            this.game = await this.gameService.getGame(id);
        }
    }
}
