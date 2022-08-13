import {Component, Input, OnInit} from '@angular/core';
import {CartService} from '../../services/cart/cart.service';
import {GameModel} from '../../models/game/game.model';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
    @Input() public game!: GameModel;

    public readonly DASH: string = '_';
    public navigateToGamePage: string = '';

    public constructor(public cartService: CartService) {}

    public ngOnInit(): void {
        this.navigateToGamePage = `/game/${this.game.id}`;
    }
}
