import {GameModel} from '../models/game/game.model';

export class CartServiceMock {
    public cartGames: GameModel[] = [];

    public addToList(game: GameModel): void {
        this.cartGames.push(game);
    }
    public removeFromList(id: number): void {
        let index = this.cartGames.findIndex((game) => game.id === id);
        if (index !== -1) {
            this.cartGames.splice(index, 1);
        }
    }

    public clearList(): void {
        this.cartGames = [];
    }

    public getAllList(): GameModel[] {
        return this.cartGames;
    }

    private has(newGame: GameModel): boolean {
        const findElement = this.cartGames.find((game) => {
            return game.id === newGame.id;
        });

        return findElement !== undefined;
    }
}
