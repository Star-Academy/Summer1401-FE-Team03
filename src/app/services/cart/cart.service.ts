import {Injectable} from '@angular/core';
import {GameModel} from '../../models/game/game.model';

@Injectable()
export class CartService {
    public cartGames: GameModel[] = [];

    public constructor() {}

    public addToList(game: GameModel): void {
        this.getCartGames();
        this.cartGames.push(game);
        this.saveToStorage();
    }

    public removeFromList(id: number): void {
        this.getCartGames();
        let index = this.cartGames.findIndex((game) => game.id === id);
        if (index !== -1) {
            this.cartGames.splice(index, 1);
        }
        this.saveToStorage();
    }

    public clearList(): void {
        localStorage.removeItem('cartGame');
        this.cartGames = [];
    }

    public getAllList(): GameModel[] {
        this.getCartGames();
        return this.cartGames;
    }

    private saveToStorage(): void {
        localStorage.setItem('cartGames', JSON.stringify(this.cartGames));
    }
    private getCartGames(): void {
        let gamesStr = localStorage.getItem('cartGames');
        if (gamesStr) {
            this.cartGames = JSON.parse(gamesStr);
        } else {
            this.cartGames = [];
        }
    }
}
