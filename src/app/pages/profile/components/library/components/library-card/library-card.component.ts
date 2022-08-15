import {Component, Input, OnInit} from '@angular/core';
import {GameModel} from '../../../../../../models/game/game.model';

@Component({
    selector: 'app-library-card',
    templateUrl: './library-card.component.html',
    styleUrls: ['./library-card.component.scss'],
})
export class LibraryCardComponent implements OnInit {
    @Input() public game!: GameModel;
    public navigateToGamePage: string = '';

    public ngOnInit(): void {
        this.navigateToGamePage = `/game/${this.game.id}`;
    }

    public getImageSource(game: GameModel): string {
        if (game.cover.id) {
            return `https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.id}.jpg`;
        } else {
            return 'assets/card-images/no-image-compact-card.webp';
        }
    }
}
