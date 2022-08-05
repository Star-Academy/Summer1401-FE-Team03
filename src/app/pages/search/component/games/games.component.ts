import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-games',
    templateUrl: './games.component.html',
    styleUrls: ['./games.component.scss'],
})
export class GamesComponent {
    @Input() public games: {imageSrc: string; title: string; rating: number; platform: string}[] = [];
}
