import {Component, EventEmitter, Input, Output} from '@angular/core';
import {GAME_SEARCHBOX_PLACEHOLDER} from '../../../../languages/fa-IR/fa';

@Component({
    selector: 'app-search-box',
    templateUrl: './search-box.component.html',
    styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent {
    @Input() public searchWord?: string = '';

    @Output() public searchWordChange = new EventEmitter<string>();

    public gameSearchboxOPlaceholder: string = GAME_SEARCHBOX_PLACEHOLDER;
}
