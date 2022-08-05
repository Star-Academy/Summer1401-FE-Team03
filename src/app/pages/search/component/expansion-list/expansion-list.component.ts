import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ExpansionListModel} from '../../models/expantion-list.model';

@Component({
    selector: 'app-expansion-list',
    templateUrl: './expansion-list.component.html',
    styleUrls: ['./expansion-list.component.scss'],
})
export class ExpansionListComponent {
    @Input() public title: string = '';
    @Input() public expansionList: ExpansionListModel[] = [];

    @Output() public itemsChange = new EventEmitter<ExpansionListModel[]>();

    public isExpanded: boolean = false;
    public searchPhrase: string = '';
}
