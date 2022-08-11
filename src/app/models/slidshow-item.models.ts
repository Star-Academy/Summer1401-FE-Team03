import {GameImageModel} from './game/dto/gameImage.model';

export interface SlideshowItem {
    image: GameImageModel;
    title?: string;
    description?: string;
}
