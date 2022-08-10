import {Component} from '@angular/core';
import {NgxPopperjsPlacements} from 'ngx-popperjs';
import {FilterService} from '../../../../services/filter/filter.service';
import {GameService} from '../../../../services/api/game/game.service';

@Component({
    selector: 'app-page-size',
    templateUrl: './page-size.component.html',
    styleUrls: ['./page-size.component.scss'],
})
export class PageSizeComponent {
    public constructor(public filterService: FilterService, public gameService: GameService) {}

    public NgxPopperjsPlacements = NgxPopperjsPlacements;

    public async pageSizeHandler(pageSize: number): Promise<void> {
        this.filterService.options.pageSize = pageSize;
        await this.filterService.navigateToSearchPage();
    }
}