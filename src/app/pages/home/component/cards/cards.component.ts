import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Card} from '../../../../models/card.model';

@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
    @Input() public cards: Card[] = [];
    @ViewChild('outerContainer') public outerContainer!: ElementRef;

    private scrollAmount = 294;

    public scroll(direction: string): void {
        let scrollValue = this.outerContainer.nativeElement.scrollLeft;
        if (direction === 'left') {
            scrollValue = scrollValue + this.scrollAmount;
        } else {
            scrollValue = scrollValue - this.scrollAmount;
        }
        this.outerContainer.nativeElement.scrollTo({
            left: scrollValue,
            behavior: 'smooth',
        });
    }
}
