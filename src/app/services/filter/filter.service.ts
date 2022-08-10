import {Injectable, OnInit} from '@angular/core';
import {SearchRequestModel} from '../../models/api/search/search-request.model';
import {ActivatedRoute, Router} from '@angular/router';
import {GameService} from '../api/game/game.service';
import {GamesSortTypes} from '../../models/enum/games-sort.types';

@Injectable()
export class FilterService {
    private readonly DEFAULT_PAGE_SIZE = 12;
    private readonly DEFAULT_OFFSET = 0;

    public options: SearchRequestModel = {
        sort: GamesSortTypes.MOST_RELEVANT,
        pageSize: this.DEFAULT_PAGE_SIZE,
        offset: this.DEFAULT_OFFSET,
    };

    public constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private gameService: GameService
    ) {}

    public async navigateToSearchPage(): Promise<void> {
        const isSearchPage = this.router.url.includes('/search');

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
            sort: GamesSortTypes.MOST_RELEVANT,
            pageSize: this.DEFAULT_PAGE_SIZE,
            offset: this.DEFAULT_OFFSET,
        };
    }
    public getFilter(): SearchRequestModel {
        let filter = this.activatedRoute.snapshot.queryParamMap.get('filter');

        let searchRequestObject = {} as SearchRequestModel;
        if (filter) searchRequestObject = JSON.parse(filter) as SearchRequestModel;

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
    public deleteGenre(id: number): void {
        const genres = this.options.filters?.genres?.filter((item) => item !== id);

        if (this.options.filters && this.options.filters.genres) this.options.filters.genres = genres;
    }
    public changeSortType(num: number): void {
        this.options.sort = num;
    }
}