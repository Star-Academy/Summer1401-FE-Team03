import {Component, OnInit} from '@angular/core';
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
    public bestShootingGames: GameModel[] = [];

    public async ngOnInit(): Promise<void> {
        await this.gameService.search({offset: 0, pageSize: 3, sort: 1}, false);
        const slideShowGamesSearchResult = this.gameService.games;
        this.slideshowImages = slideShowGamesSearchResult.map((game) => {
            return {
                image: game.artworks[0],
                gameId: game.id,
                title: game.name,
                description: game.summary,
            } as SlideshowItem;
        });

        this.upcomingGames = await this.gameService.getUpcoming();

        await this.gameService.search({
            offset: 0,
            pageSize: 15,
            sort: 1,
            filters: {genres: [5]},
        });
        this.bestShootingGames = this.gameService.games;
    }
}
