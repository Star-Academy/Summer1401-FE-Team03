import {DiscountPipe} from './discount.pipe';

describe('DiscountPipe', () => {
    const testValue: number = 200;
    const testValueAfterDiscount: number = 150;
    const testDiscountValue = 25;

    it('should create an instance', () => {
        const pipe = new DiscountPipe();
        expect(pipe).toBeTruthy();
    });

    it('should calculate discount amount', () => {
        const pipe = new DiscountPipe();
        const pipeResult = pipe.transform(testValue, testValueAfterDiscount);
        expect(pipeResult).toEqual(testDiscountValue);
    });
});
