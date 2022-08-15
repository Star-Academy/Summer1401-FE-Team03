import {GameImageModel} from './game/dto/gameImage.model';

export interface SlideshowItem {
    image: GameImageModel;
    gameId?: number;
    title?: string;
    description?: string;
}
