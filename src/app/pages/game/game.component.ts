import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GameService} from '../../services/api/game/game.service';
import {GameModel} from '../../models/game/game.model';
import {CartService} from '../../services/cart/cart.service';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss'],
})
export class GameComponent {
    public game!: GameModel;

    public constructor(
        private route: ActivatedRoute,
        public gameService: GameService,
        public cartService: CartService
    ) {
        route.params.subscribe(async (e) => {
            window.scrollTo(0, 0);
            const idString = e?.id;
            if (idString) {
                const id = parseInt(idString);
                this.game = await this.gameService.getGame(id);
            }
        });
    }
}
