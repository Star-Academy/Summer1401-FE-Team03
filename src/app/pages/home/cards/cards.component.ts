import {Component, Input} from '@angular/core';
import Card from '../../../models/card.model';

@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
    @Input() public cards: Card[] = [];
}
