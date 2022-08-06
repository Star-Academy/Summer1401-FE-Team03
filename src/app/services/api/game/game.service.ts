import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';
import {API_GAME_SEARCH} from '../../../utils/api.utils';
import {GameModel} from '../../../models/game/game.model';
import {SearchResponseModel} from '../../../models/api/search/search-response.model';

@Injectable()
export class GameService {
    public games: GameModel[] = [];
    public constructor(private router: Router, private apiService: ApiService) {}

    public async search(): Promise<void> {
        const response = await this.apiService.PostRequest<SearchResponseModel>({url: API_GAME_SEARCH, body: {}});
        this.games = response && Array.isArray(response?.games) ? response.games : [];
    }
}
