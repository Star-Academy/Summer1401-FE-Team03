import {Injectable, OnInit} from '@angular/core';
import {SearchRequestModel} from '../../models/api/search/search-request.model';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable()
export class FilterService {
    public filter: SearchRequestModel = {};

    public constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

    public async navigateToSearchPage(): Promise<void> {
        await this.router.navigate(['/', 'search'], {
            queryParams: {filter: JSON.stringify(this.filter)},
        });
    }

    public getFilter(): SearchRequestModel {
        const filter = this.activatedRoute.snapshot.queryParamMap.get('filter');
        let searchRequestObject = {} as SearchRequestModel;
        if (filter) searchRequestObject = JSON.parse(filter) as SearchRequestModel;

        this.filter = searchRequestObject;
        return searchRequestObject;
    }

    public setGenre(id: number): void {
        if (this.filter.options) {
            if (this.filter.options.genres) {
                this.filter.options.genres.push(id);
            } else {
                this.filter.options.genres = [id];
            }
        } else {
            this.filter.options = {genres: [id]};
        }
    }
    public deleteGenre(id: number): void {
        const genres = this.filter.options?.genres?.filter((item) => item !== id);

        if (this.filter.options && this.filter.options.genres) this.filter.options.genres = genres;
    }
}
