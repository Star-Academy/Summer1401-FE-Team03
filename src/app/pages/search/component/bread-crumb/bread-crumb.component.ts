import {Component, Input, OnInit} from '@angular/core';
import {BreadCrumbModel} from './models/bread-crumb.model';

@Component({
    selector: 'app-bread-crumb',
    templateUrl: './bread-crumb.component.html',
    styleUrls: ['./bread-crumb.component.scss'],
})
export class BreadCrumbComponent {
    @Input() public breadcrumbs: BreadCrumbModel[] = [];
}
