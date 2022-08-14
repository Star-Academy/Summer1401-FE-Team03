import {Component, Input} from '@angular/core';
import {CartService} from '../../services/cart/cart.service';
import {GameModel} from '../../models/game/game.model';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent {
    @Input() public game!: GameModel;

    public constructor(public cartService: CartService) {}
}
