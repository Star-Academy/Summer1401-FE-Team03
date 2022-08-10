import {Component, OnInit} from '@angular/core';
import {NgxPopperjsPlacements} from 'ngx-popperjs';
import {GamesSortTypes} from 'src/app/models/enum/games-sort.types';
import {FilterService} from '../../../../services/filter/filter.service';
import {MOST_POPULAR, MOST_RELEVANT, NEWEST, TOP_SELLER} from './language/message';

@Component({
    selector: 'app-sorting',
    templateUrl: './sorting.component.html',
    styleUrls: ['./sorting.component.scss'],
})
export class SortingComponent {
    public GamesSortTypes = GamesSortTypes;
    public selectedSortingText: string = MOST_RELEVANT;
    public NgxPopperjsPlacements = NgxPopperjsPlacements;

    public constructor(public filterService: FilterService) {}

    private static getTextByNUmber(sortNumber: number): string {
        if (sortNumber === 0) return MOST_RELEVANT;
        else if (sortNumber === 1) return TOP_SELLER;
        else if (sortNumber === 2) return MOST_POPULAR;
        else return NEWEST;
    }

    public async changeSortingFilter(sortNumber: number): Promise<void> {
        this.selectedSortingText = SortingComponent.getTextByNUmber(sortNumber);
        this.filterService.changeSortType(sortNumber);
        await this.filterService.navigateToSearchPage();
    }
}
