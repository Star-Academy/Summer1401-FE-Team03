import {Component, OnInit} from '@angular/core';
import {BreadCrumbModel} from './component/bread-crumb/models/bread-crumb.model';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
    public breadcrumbs: BreadCrumbModel[] = [
        {title: 'خانه', url: '/'},
        {title: 'جستجو', url: '/search'},
    ];
}
