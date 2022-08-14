import {Component, OnDestroy, OnInit} from '@angular/core';
import {GameService} from '../../services/api/game/game.service';
import {FilterService} from '../../services/filter/filter.service';

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
