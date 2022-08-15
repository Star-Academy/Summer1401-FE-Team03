import {Component, Input, OnInit} from '@angular/core';
import {SlideshowItem} from '../../../../models/slidshow-item.models';

@Component({
    selector: 'app-slideshow-image',
    templateUrl: './slideshow-image.component.html',
    styleUrls: ['./slideshow-image.component.scss'],
})
export class SlideshowImageComponent implements OnInit {
    @Input() public item!: SlideshowItem;
    public imageSrc: string = '';
    public linkToGamePage: string = '';

    public ngOnInit(): void {
        this.imageSrc = `https://images.igdb.com/igdb/image/upload/t_1080p/${this.item.image.id}.jpg`;
        this.linkToGamePage = `/game/${this.item.gameId}`;
    }
}
