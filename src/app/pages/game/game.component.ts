import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GameService} from '../../services/api/game/game.service';
import {GameModel} from '../../models/game/game.model';
import {CartService} from '../../services/cart/cart.service';
import {ADD_TO_CART} from '../../languages/fa-IR/fa';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss'],
})
export class GameComponent {
    public game!: GameModel;
    public screenshotImageSrc: string = '';
    public coverImageSrc: string = '';
    public companyImageSrc: string = '';
    public addToCart = ADD_TO_CART;

    public constructor(
        private route: ActivatedRoute,
        public gameService: GameService,
        public cartService: CartService
    ) {
        this.setParams();
    }

    public setParams(): void {
        this.route.params.subscribe(async (e) => {
            window.scrollTo(0, 0);
            const idString = e?.id;
            if (idString) {
                const id = parseInt(idString);
                this.game = await this.gameService.getGame(id);
                this.setImageSrcs();
            }
        });
    }

    public setImageSrcs(): void {
        this.screenshotImageSrc = `https://images.igdb.com/igdb/image/upload/t_screenshot_huge/${this.game.cover.id}.jpg`;
        this.coverImageSrc = `https://images.igdb.com/igdb/image/upload/t_cover_big/${this.game.cover.id}.jpg`;
        this.companyImageSrc = `https://images.igdb.com/igdb/image/upload/t_cover_big/${this.game.involvedCompanies[0].company.logo.id}.jpg`;
    }
}
