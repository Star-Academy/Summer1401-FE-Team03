import {SearchRequestModel} from '../models/api/search/search-request.model';
import {GameModel} from '../models/game/game.model';
import {VALID_GAMES_DATA} from './fetch.mock';

export class GameServiceMock {
    public games: GameModel[] = [];
    public async search(data: SearchRequestModel, showSpinnerOnFetch: boolean = true): Promise<void> {
        this.games = VALID_GAMES_DATA;
    }
}
