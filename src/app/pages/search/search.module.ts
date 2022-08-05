import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search.component';
import {BreadCrumbComponent} from './component/bread-crumb/bread-crumb.component';
import {FilterComponent} from './component/filter/filter.component';
import {RouterModule} from '@angular/router';
import {GamesComponent} from './component/games/games.component';
import {SwitchComponent} from './component/switch/switch.component';
import {FormsModule} from '@angular/forms';
import {ExpansionListComponent} from './component/expansion-list/expansion-list.component';
import {ExpansionSearchBoxComponent} from './component/expansion-list/expansion-search-box/expansion-search-box.component';
import {FilterPipeModule} from '../../pipes/filter-pipe/filter-pipe.module';

@NgModule({
    declarations: [
        SearchComponent,
        BreadCrumbComponent,
        FilterComponent,
        GamesComponent,
        SwitchComponent,
        ExpansionListComponent,
        ExpansionSearchBoxComponent,
    ],
    imports: [CommonModule, RouterModule, FormsModule, FilterPipeModule],
})
export class SearchModule {}
