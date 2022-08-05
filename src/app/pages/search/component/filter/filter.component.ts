import {Component, Input, OnInit} from '@angular/core';
import {ExpansionListModel} from '../../models/expantion-list.model';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
    public expansionItem: ExpansionListModel[] = [
        {title: 'Real Time Strategy (RTS)', isEnable: false},
        {title: 'Strategy', isEnable: false},
        {title: 'Turn-based strategy (TBS)', isEnable: false},
        {title: 'Adventure', isEnable: false},
        {title: 'Point-and-click', isEnable: false},
        {title: 'Fighting', isEnable: false},
        {title: 'Shooter', isEnable: false},
        {title: 'Music', isEnable: false},
        {title: 'Platform', isEnable: false},
        {title: 'Puzzle', isEnable: false},
        {title: 'Racing', isEnable: false},
        {title: 'Role-playing (RPG)', isEnable: false},
        {title: 'Simulator', isEnable: false},
        {title: 'Sport', isEnable: false},
        {title: 'Tactical', isEnable: false},
        {title: "Hack and slash/Beat 'em up", isEnable: false},
        {title: 'Quiz/Trivia', isEnable: false},
        {title: 'Pinball', isEnable: false},
        {title: 'Indie', isEnable: false},
        {title: 'Arcade', isEnable: false},
        {title: 'Visual Novel', isEnable: false},
        {title: 'Card & Board Game', isEnable: false},
        {title: 'MOBA', isEnable: false},
    ];
}
