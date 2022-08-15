import {FilterPipe} from './filter.pipe';

describe('FilterPipe', () => {
    let pipe: FilterPipe;
    let sampleItem = ['test', 'testax', 'test2'];
    const searchPhrase = 'ax';

    beforeEach(() => {
        pipe = new FilterPipe();
    });

    it(`should include ${searchPhrase} phrase`, () => {
        const result = pipe.transform(sampleItem, searchPhrase);
        const isInclude = result[0].includes(searchPhrase);

        expect(isInclude).toBeTrue();
    });

    it(`should be same`, () => {
        const result = pipe.transform(sampleItem, '');
        const isSame = JSON.stringify(result) === JSON.stringify(sampleItem);

        expect(isSame).toBeTrue();
    });
});
