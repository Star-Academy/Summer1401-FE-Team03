import {CompanyTypePipe} from './company-type.pipe';
import {VALID_GAMES_DATA} from '../../mock/fetch.mock';

describe('CompanyTypePipe', () => {
    it('should return developer', function () {
        const pipe = new CompanyTypePipe();
        const result = pipe.transform(VALID_GAMES_DATA[0].involvedCompanies[0]);

        expect(result).toBe('developer');
    });

    it('should return publisher', function () {
        const pipe = new CompanyTypePipe();
        const result = pipe.transform(VALID_GAMES_DATA[1].involvedCompanies[0]);

        expect(result).toBe('publisher');
    });
});
