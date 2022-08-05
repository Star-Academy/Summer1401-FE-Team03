import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search.component';
import {BreadCrumbComponent} from './component/bread-crumb/bread-crumb.component';
import {FilterComponent} from './component/filter/filter.component';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [SearchComponent, BreadCrumbComponent, FilterComponent],
    imports: [CommonModule, RouterModule],
})
export class SearchModule {}
