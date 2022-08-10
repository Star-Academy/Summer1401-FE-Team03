import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreadCrumbModel} from './models/bread-crumb.model';
import {GameService} from '../../services/api/game/game.service';
import {FilterService} from '../../services/filter/filter.service';
import {GamesSortTypes} from '../../models/enum/games-sort.types';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
    public constructor(public gameService: GameService, public filterService: FilterService) {}

    public async ngOnInit(): Promise<void> {
        await this.filterService.searchByFilters();
    }

    public ngOnDestroy(): void {
        this.filterService.clearFilter();
    }
}
