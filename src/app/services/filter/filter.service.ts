import {Injectable} from '@angular/core';
import {SearchRequestModel} from '../../models/api/search/search-request.model';
import {ActivatedRoute, Router} from '@angular/router';
import {GameService} from '../api/game/game.service';
import {GamesSortTypes} from '../../models/enum/games-sort.types';

@Injectable()
export class FilterService {
    private readonly DEFAULT_PAGE_SIZE = 12;
    private readonly DEFAULT_OFFSET = 0;

    public options: SearchRequestModel = {
        sort: GamesSortTypes.MostRelevant,
        pageSize: this.DEFAULT_PAGE_SIZE,
        offset: this.DEFAULT_OFFSET,
    };

    public constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private gameService: GameService
    ) {}

    public async navigateToSearchPage(resetOffset: boolean = true): Promise<void> {
        const isSearchPage = this.router.url.includes('/search');

        if (resetOffset) this.options.offset = this.DEFAULT_OFFSET;

        await this.router.navigate(['/', 'search'], {
            queryParams: {filter: JSON.stringify(this.options)},
        });

        if (isSearchPage) await this.searchByFilters();
    }

    public async searchByFilters(): Promise<void> {
        const filters = this.getFilter();
        await this.gameService.search(filters);
    }

    public clearFilter(): void {
        this.options = {
            sort: GamesSortTypes.MostRelevant,
            pageSize: this.DEFAULT_PAGE_SIZE,
            offset: this.DEFAULT_OFFSET,
        };
    }

    public getFilter(): SearchRequestModel {
        let filter = this.activatedRoute.snapshot.queryParamMap.get('filter');

        if (!filter) {
            this.clearFilter();
            return this.options;
        }

        let searchRequestObject = JSON.parse(filter) as SearchRequestModel;

        this.options = searchRequestObject;
        return searchRequestObject;
    }

    public setGenre(id: number): void {
        if (this.options.filters) {
            if (this.options.filters.genres) {
                this.options.filters.genres.push(id);
            } else {
                this.options.filters.genres = [id];
            }
        } else {
            this.options.filters = {genres: [id]};
        }
    }

    public maxRate(value: number): void {
        if (this.options.filters) {
            this.options.filters.maximumRating = value;
        } else {
            this.options.filters = {maximumRating: value};
        }
    }

    public minRate(value: number): void {
        if (this.options.filters) {
            this.options.filters.minimumRating = value;
        } else {
            this.options.filters = {minimumRating: value};
        }
    }

    public deleteGenre(id: number): void {
        const genres = this.options.filters?.genres?.filter((item) => item !== id);

        if (this.options.filters && this.options.filters.genres) this.options.filters.genres = genres;
    }

    public changeSortType(num: number): void {
        this.options.sort = num;
    }
}
