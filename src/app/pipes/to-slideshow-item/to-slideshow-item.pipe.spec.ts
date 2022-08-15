import {ToSlideshowItemPipe} from './to-slideshow-item.pipe';
import {GameImageModel} from '../../models/game/dto/gameImage.model';
import {SlideshowItem} from '../../models/slidshow-item.models';

describe('ToSlideshowItemPipe', () => {
    const TEST_GAME_MODEL: GameImageModel[] = [
        {id: 'test-1', width: 200, height: 200},
        {id: 'test-2', width: 150, height: 50},
    ];

    const TEST_SLIDESHOW_ITEM: SlideshowItem[] = [{image: TEST_GAME_MODEL[0]}, {image: TEST_GAME_MODEL[1]}];

    it('should create an instance', () => {
        const pipe = new ToSlideshowItemPipe();
        expect(pipe).toBeTruthy();
    });

    it('should convert GameModel to SlideShowItem', () => {
        const pipe = new ToSlideshowItemPipe();
        const pipeResult = pipe.transform(TEST_GAME_MODEL);
        expect(pipeResult).toEqual(TEST_SLIDESHOW_ITEM);
    });
});
