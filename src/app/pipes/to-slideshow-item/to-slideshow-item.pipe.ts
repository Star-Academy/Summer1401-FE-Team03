import {Pipe, PipeTransform} from '@angular/core';
import {GameImageModel} from '../../models/game/dto/gameImage.model';
import {SlideshowItem} from '../../models/slidshow-item.models';

@Pipe({
    name: 'toSlideshowItem',
})
export class ToSlideshowItemPipe implements PipeTransform {
    public transform(value: GameImageModel[]): SlideshowItem[] {
        let slideShowItems: SlideshowItem[] = [];
        for (let gameImage of value) {
            let slideShowItem: SlideshowItem = {image: gameImage};
            slideShowItems.push(slideShowItem);
        }

        return slideShowItems;
    }
}
