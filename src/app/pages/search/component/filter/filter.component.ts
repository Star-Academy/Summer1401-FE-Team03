import {Component, Input, OnInit} from '@angular/core';
import {ExpansionListModel} from '../../models/expantion-list.model';
import {GameService} from '../../../../services/api/game/game.service';
import {FilterService} from '../../../../services/filter/filter.service';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
    public expansionItems: ExpansionListModel[] = [];

    public constructor(private gameService: GameService, private filterService: FilterService) {}

    public async ngOnInit(): Promise<void> {
        const genres = await this.gameService.genres();
        const filters = this.filterService.getFilter();

        const expansionsItems = genres?.map((genre) => {
            const isEnable = !!filters.filters?.genres?.includes(genre.id);
            const expansionItem: ExpansionListModel = {
                genre: genre,
                isEnable: isEnable,
            };
            return expansionItem;
        });

        this.expansionItems = expansionsItems ?? [];
    }

    public async filterSet(): Promise<void> {
        await this.filterService.navigateToSearchPage();
    }
    public async clearFilter(): Promise<void> {
        await this.filterService.clearFilter();
        await this.filterService.navigateToSearchPage();
    }
}
