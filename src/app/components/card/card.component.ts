import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
    @Input() public src: string = 'assets/card-images/no-image.jpg';
    @Input() public alt: string = 'برای این بازی عکسی قرار داده نشده است.';
    @Input() public title: string = 'بازی';
    @Input() public description: string = 'توضیحات بازی';
    @Input() public price!: number;
    @Input() public buttonText?: string = 'افزودن به سبد خرید';
    @Input() public link?: number;

    public readonly DASH: string = '_';
    public navigateToGamePage: string = '';

    public ngOnInit(): void {
        this.navigateToGamePage = `/game/${this.link}`;
    }
}
