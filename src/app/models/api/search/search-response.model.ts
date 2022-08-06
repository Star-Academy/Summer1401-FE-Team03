import {GameModel} from '../../game/game.model';

export interface SearchResponseModel {
    count: number;
    games: GameModel[];
}
