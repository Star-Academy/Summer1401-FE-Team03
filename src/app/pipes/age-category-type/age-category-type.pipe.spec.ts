import {AgeCategoryTypePipe} from './age-category-type.pipe';

describe('AgeCategoryTypePipe', () => {
    it('should create an instance', () => {
        const pipe = new AgeCategoryTypePipe();
        expect(pipe).toBeTruthy();
    });

    it('should return correct switch value - DEFAULT', () => {
        const pipe = new AgeCategoryTypePipe();
        const pipeResult = pipe.transform(0);
        expect(pipeResult).toEqual('');
    });

    it('should return correct switch value - ESRB', () => {
        const pipe = new AgeCategoryTypePipe();
        const pipeResult = pipe.transform(1);
        expect(pipeResult).toEqual('ESRB');
    });

    it('should return correct switch value - PEGI', () => {
        const pipe = new AgeCategoryTypePipe();
        const pipeResult = pipe.transform(2);
        expect(pipeResult).toEqual('PEGI');
    });
});
