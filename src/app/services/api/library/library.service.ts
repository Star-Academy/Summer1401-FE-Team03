import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {GameModel} from '../../../models/game/game.model';
import {API_LIBRARY_ADD, API_LIBRARY_ALL, API_LIBRARY_REMOVE} from '../../../utils/api.utils';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class LibraryService {
    public games: GameModel[] = [];

    public constructor(private apiService: ApiService, private authService: AuthService) {}

    public async addGame(gameId: number): Promise<boolean | null> {
        const data = {gameId: gameId, token: this.authService.token};

        const response = await this.apiService.PostRequest({url: API_LIBRARY_ADD, body: data});

        if (response !== null) {
            return true;
        }
        return null;
    }

    public async getAll(): Promise<void> {
        const data = {token: this.authService.token};

        const response = await this.apiService.PostRequest<{games: GameModel[]}>({url: API_LIBRARY_ALL, body: data});

        if (response !== null) {
            this.games = response.games;
        }
    }

    public async removeGame(gameId: number): Promise<boolean | null> {
        const data = {token: this.authService.token, gameId: gameId};

        const response = await this.apiService.PostRequest({
            url: API_LIBRARY_REMOVE,
            body: data,
            init: {method: 'delete'},
        });

        if (response !== null) {
            return true;
        }
        return null;
    }

    public async addAll(games: GameModel[]): Promise<boolean> {
        let finalStatus = true;

        for (let i = 0; i < games.length; i++) {
            const result = await this.addGame(games[i].id);

            finalStatus = finalStatus && !!result;
        }

        return finalStatus;
    }
}
