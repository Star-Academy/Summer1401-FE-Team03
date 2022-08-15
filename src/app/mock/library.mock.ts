import {Injectable} from '@angular/core';
import {VALID_GAMES_DATA} from './fetch.mock';
import {GameModel} from '../models/game/game.model';

@Injectable()
export class LibraryServiceMock {
    public games: GameModel[] = [];

    public async getAll(): Promise<void> {
        this.games = VALID_GAMES_DATA;
    }

    // public async removeGame(gameId: number): Promise<boolean | null> {
    //     const finedIndex = this.games.findIndex((game) => game.id === gameId);
    //
    //     if (finedIndex === -1) {
    //         return null;
    //     } else {
    //         this.games.splice(finedIndex, 1);
    //         return true;
    //     }
    // }

    public async addAll(games: GameModel[]): Promise<boolean> {
        for (let game of games) {
            this.games.push(game);
        }

        return true;
    }
}
