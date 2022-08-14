import {Component, OnInit} from '@angular/core';
import {LibraryService} from '../../../../services/api/library/library.service';

@Component({
    selector: 'app-library',
    templateUrl: './library.component.html',
    styleUrls: ['./library.component.scss'],
})
export class LibraryComponent implements OnInit {
    public constructor(public libraryService: LibraryService) {}

    public async ngOnInit(): Promise<void> {
        await this.libraryService.getAll();
    }
}
