import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search.component';
import {FilterComponent} from './component/filter/filter.component';
import {RouterModule} from '@angular/router';
import {GamesComponent} from './component/games/games.component';
import {SwitchComponent} from './component/filter/component/switch/switch.component';
import {FormsModule} from '@angular/forms';
import {ExpansionListComponent} from './component/filter/component/expansion-list/expansion-list.component';
import {ExpansionSearchBoxComponent} from './component/filter/component/expansion-list/expansion-search-box/expansion-search-box.component';
import {FilterPipeModule} from '../../pipes/filter-pipe/filter-pipe.module';
import {CompactCardComponent} from './component/games/component/compact-card/compact-card.component';
import {PaginationModule} from './component/games/component/pagination/pagination.module';
import {NgxPopperjsModule} from 'ngx-popperjs';
import {PageSizeComponent} from './component/page-size/page-size.component';
import {SortingComponent} from './component/sorting/sorting.component';
import {DiscountPipeModule} from '../../pipes/discount-pipe/discount-pipe.module';
import {SpinnerService} from '../../components/spinner/service/spinner/spinner.service';
import {TwoWayRangeComponent} from './component/filter/component/two-way-range/two-way-range.component';

@NgModule({
    declarations: [
        SearchComponent,
        FilterComponent,
        GamesComponent,
        SwitchComponent,
        ExpansionListComponent,
        ExpansionSearchBoxComponent,
        CompactCardComponent,
        PageSizeComponent,
        SortingComponent,
        TwoWayRangeComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        FilterPipeModule,
        PaginationModule,
        NgxPopperjsModule,
        DiscountPipeModule,
    ],
    providers: [SpinnerService],
})
export class SearchModule {}
