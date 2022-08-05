import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-expansion-search-box',
    templateUrl: './expansion-search-box.component.html',
    styleUrls: ['./expansion-search-box.component.scss'],
})
export class ExpansionSearchBoxComponent {
    @Input() public placeholderText: string = '';
    @Input() public searchPhrase: string = '';

    @Output() public searchPhraseChange = new EventEmitter<string>();
}