import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';
import {API_GAME_GENRES, API_GAME_SEARCH} from '../../../utils/api.utils';
import {GameModel} from '../../../models/game/game.model';
import {SearchResponseModel} from '../../../models/api/search/search-response.model';
import {SearchRequestModel} from '../../../models/api/search/search-request.model';
import {ItemModel} from '../../../models/game/dto/item.model';

@Injectable()
export class GameService {
    public games: GameModel[] = [];
    public totalCount: number = 0;
    public constructor(private router: Router, private apiService: ApiService) {}

    public async search(data: SearchRequestModel): Promise<void> {
        const response = await this.apiService.PostRequest<SearchResponseModel>({url: API_GAME_SEARCH, body: data});
        this.games = response && Array.isArray(response?.games) ? response.games : [];
        this.totalCount = response ? response.count : 0;
    }

    public async genres(): Promise<ItemModel[] | null> {
        const response = await this.apiService.GetRequest<ItemModel[]>({url: API_GAME_GENRES});
        return response;
    }
}
