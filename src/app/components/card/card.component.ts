import {Component, Input, OnInit} from '@angular/core';
import {CartService} from '../../services/cart/cart.service';
import {GameModel} from '../../models/game/game.model';
import {ADD_TO_CART, LEVEL_COIN} from '../../languages/fa-IR/fa';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
    @Input() public game!: GameModel;
    public imageSrc: string = '';
    public linkToGamePage: string = '';
    public addToCart: string = ADD_TO_CART;
    public levelCoin: string = LEVEL_COIN;

    public constructor(public cartService: CartService) {}

    public ngOnInit(): void {
        this.imageSrc = `https://images.igdb.com/igdb/image/upload/t_cover_big/${this.game.cover.id}.jpg`;
        this.linkToGamePage = `/game/${this.game.id}`;
    }
}
