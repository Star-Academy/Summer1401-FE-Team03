import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/api/auth/auth.service';
import {FilterService} from '../../services/filter/filter.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    public searchPhrase: string = '';

    public constructor(public authService: AuthService, public filterService: FilterService) {}

    public ngOnInit(): void {
        //TODO: FIX
        this.filterService.getSearchPhrase().then((searchPhrase) => {
            // this.searchPhrase = searchPhrase;
        });
    }

    public async searchSubmitHandler(event: Event): Promise<void> {
        event.preventDefault();

        this.filterService.options.searchPhrase = this.searchPhrase;
        await this.filterService.navigateToSearchPage();
        console.log();
    }
}
