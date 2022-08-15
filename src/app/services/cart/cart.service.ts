import {Injectable} from '@angular/core';
import {GameModel} from '../../models/game/game.model';
import {SnackbarService} from '../../components/snackbar/services/snackbar/snackbar.service';
import {SnackbarTypes} from '../../models/enum/snackbar.types';

@Injectable()
export class CartService {
    public cartGames: GameModel[] = [];

    public constructor(private snackbarService: SnackbarService) {}

    public addToList(game: GameModel): void {
        this.getCartGames();
        if (this.has(game)) {
            this.snackbarService.show('این بازی قبلا اضافه شده', SnackbarTypes.Warning);
            return;
        }
        this.cartGames.push(game);
        this.saveToStorage();
        this.snackbarService.show('بازی به سبد خرید اضافه شد', SnackbarTypes.Success);
    }

    public removeFromList(id: number): void {
        this.getCartGames();
        let index = this.cartGames.findIndex((game) => game.id === id);
        if (index !== -1) {
            this.cartGames.splice(index, 1);
            this.snackbarService.show('بازی از سبد خرید حذف شد', SnackbarTypes.Error);
        }
        this.saveToStorage();
    }

    public clearList(): void {
        localStorage.removeItem('cartGames');
        this.cartGames = [];
        this.snackbarService.show('سبد خرید خالی شد', SnackbarTypes.Error);
    }

    public getAllList(): GameModel[] {
        this.getCartGames();
        return this.cartGames;
    }

    private has(newGame: GameModel): boolean {
        const findElement = this.cartGames.find((game) => {
            return game.id === newGame.id;
        });

        return findElement !== undefined;
    }

    private saveToStorage(): void {
        localStorage.setItem('cartGames', JSON.stringify(this.cartGames));
    }

    public getCartGames(): void {
        let gamesStr = localStorage.getItem('cartGames');
        if (gamesStr) {
            this.cartGames = JSON.parse(gamesStr);
        } else {
            this.cartGames = [];
        }
    }
}
