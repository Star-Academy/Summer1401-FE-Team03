import {ImageSourcePipe} from './image-source.pipe';

describe('ImageSourcePipe', () => {
    const testType: string = 'testType';
    const testID: string = 'testID';
    const defaultImagePath: string = 'assets/card-images/no-image.webp';
    const testImagePath: string = `https://images.igdb.com/igdb/image/upload/t_${testType}/${testID}.jpg`;

    it('should create an instance', () => {
        const pipe = new ImageSourcePipe();
        expect(pipe).toBeTruthy();
    });

    it('should return default image source', () => {
        const pipe = new ImageSourcePipe();
        const pipeResult = pipe.transform(testType);
        expect(pipeResult).toEqual(defaultImagePath);
    });

    it('should return desired image source', () => {
        const pipe = new ImageSourcePipe();
        const pipeResult = pipe.transform(testType, testID);
        expect(pipeResult).toEqual(testImagePath);
    });
});
