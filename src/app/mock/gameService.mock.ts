import {SearchRequestModel} from '../models/api/search/search-request.model';
import {GameModel} from '../models/game/game.model';
import {VALID_GAMES_DATA} from './fetch.mock';
import {ItemModel} from '../models/game/dto/item.model';

export class GameServiceMock {
    public games: GameModel[] = [];
    public async search(data: SearchRequestModel, showSpinnerOnFetch: boolean = true): Promise<void> {
        this.games = VALID_GAMES_DATA;
    }

    public async genres(): Promise<ItemModel[] | null> {
        let genres: ItemModel[] = [
            {id: 1, name: 'test'},
            {id: 2, name: 'test2'},
            {id: 3, name: 'test3'},
            {id: 4, name: 'test4'},
        ];

        return genres;
    }
}
