import {Component, OnInit} from '@angular/core';
import {Card} from '../../models/card.model';
import {GameService} from '../../services/api/game/game.service';
import {SlideshowItem} from '../../models/slidshow-item.models';
import {GameModel} from '../../models/game/game.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    public constructor(private gameService: GameService) {}

    public slideshowImages: SlideshowItem[] = [];
    public upcomingGames: GameModel[] = [];

    public async ngOnInit(): Promise<void> {
        await this.gameService.search({offset: 0, pageSize: 3, sort: 1}, false);
        this.slideshowImages = this.gameService.games.map((game) => {
            return {
                image: game.artworks[0],
                gameId: game.id,
                title: game.name,
                description: game.summary,
            } as SlideshowItem;
        });

        this.upcomingGames = await this.gameService.getUpcoming();
    }
}
