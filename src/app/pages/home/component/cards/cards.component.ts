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

    public scrollToLeft(): void {
        this.outerContainer.nativeElement.scrollTo({
            left: this.outerContainer.nativeElement.scrollLeft + 294,
            // behavior: 'smooth',
        });
    }

    public scrollToRight(): void {
        this.outerContainer.nativeElement.scrollTo({
            left: this.outerContainer.nativeElement.scrollLeft - 294,
            // behavior: 'smooth',
        });
    }
}
