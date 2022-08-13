import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';
import {API_GAME_GENRES, API_GAME_ONE, API_GAME_SEARCH, API_GAME_UPCOMING} from '../../../utils/api.utils';
import {GameModel} from '../../../models/game/game.model';
import {SearchResponseModel} from '../../../models/api/search/search-response.model';
import {SearchRequestModel} from '../../../models/api/search/search-request.model';
import {ItemModel} from '../../../models/game/dto/item.model';
import {GetGameResponseModel} from '../../../models/api/get-game/get-game-response.model';
import {GamesModel} from '../../../models/game/games.model';

@Injectable()
export class GameService {
    public games: GameModel[] = [];
    public totalCount: number = 0;
    public constructor(private router: Router, private apiService: ApiService) {}

    private static responseMapper(response: SearchResponseModel): GameModel[] {
        return response.games.map((game) => {
            game.price = game.price / 1000;
            game.priceOnSale = game.priceOnSale / 1000;
            return game;
        });
    }

    public async search(data: SearchRequestModel, showSpinnerOnFetch: boolean = true): Promise<void> {
        const response = await this.apiService.PostRequest<SearchResponseModel>({
            url: API_GAME_SEARCH,
            body: data,
            showSpinnerOnFetch: showSpinnerOnFetch,
        });
        this.games = response && Array.isArray(response?.games) ? GameService.responseMapper(response) : [];
        this.totalCount = response ? response.count : 0;
    }

    public async getGame(id: number): Promise<GameModel> {
        const response = await this.apiService.GetRequest<GetGameResponseModel>({url: `${API_GAME_ONE}/${id}`});

        return response?.game || ({} as GameModel);
    }

    public async getUpcoming(): Promise<GameModel[]> {
        const response = await this.apiService.GetRequest<GamesModel>({url: `${API_GAME_UPCOMING}`});

        return response?.games || ({} as GameModel[]);
    }

    public async genres(): Promise<ItemModel[] | null> {
        return await this.apiService.GetRequest<ItemModel[]>({url: API_GAME_GENRES});
    }
}
