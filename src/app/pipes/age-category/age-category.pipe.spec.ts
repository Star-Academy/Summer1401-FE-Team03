import {AgeCategoryPipe} from './age-category.pipe';

describe('AgeCategoryPipe', () => {
    it('should create an instance', () => {
        const pipe = new AgeCategoryPipe();
        expect(pipe).toBeTruthy();
    });

    it('should return correct value - default', () => {
        const result = switchCheck(-1);
        expect(result).toEqual('رده سنی مشخص نشده است.');
    });
    it('should return correct value - 1', () => {
        const result = switchCheck(1);
        expect(result).toEqual('+3 سال');
    });
    it('should return correct value - 2', () => {
        const result = switchCheck(2);
        expect(result).toEqual('+7 سال');
    });
    it('should return correct value - 3', () => {
        const result = switchCheck(3);
        expect(result).toEqual('+12 سال');
    });
    it('should return correct value - 4', () => {
        const result = switchCheck(4);
        expect(result).toEqual('+16 سال');
    });
    it('should return correct value - 5', () => {
        const result = switchCheck(5);
        expect(result).toEqual('+18 سال');
    });
    it('should return correct value - 6', () => {
        const result = switchCheck(6);
        expect(result).toEqual('رده سنی مشخص نشده است.');
    });
    it('should return correct value - 7', () => {
        const result = switchCheck(7);
        expect(result).toEqual('+3 سال');
    });
    it('should return correct value - 8', () => {
        const result = switchCheck(8);
        expect(result).toEqual('همه');
    });
    it('should return correct value - 9', () => {
        const result = switchCheck(9);
        expect(result).toEqual('+10 سال');
    });
    it('should return correct value - 10', () => {
        const result = switchCheck(10);
        expect(result).toEqual('+13 سال');
    });
    it('should return correct value - 11', () => {
        const result = switchCheck(11);
        expect(result).toEqual('+17 سال');
    });
    it('should return correct value - 12', () => {
        const result = switchCheck(12);
        expect(result).toEqual('+18 سال');
    });
});

// UTILITY FUNCTIONS

function switchCheck(value: number): string {
    const pipe = new AgeCategoryPipe();
    return pipe.transform(value);
}
