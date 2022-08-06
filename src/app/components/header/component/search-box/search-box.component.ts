import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-search-box',
    templateUrl: './search-box.component.html',
    styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent {
    @Input() public searchWord: string = '';

    @Output() public searchWordChange = new EventEmitter<string>();
}
