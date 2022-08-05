import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-compact-card',
    templateUrl: './compact-card.component.html',
    styleUrls: ['./compact-card.component.scss'],
})
export class CompactCardComponent {
    @Input() public game!: {imageSrc: string; title: string; rating: number; platform: string};
}
