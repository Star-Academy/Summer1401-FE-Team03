import {Component} from '@angular/core';
import {AuthService} from '../../services/api/auth/auth.service';
import {Router} from '@angular/router';
import {SearchRequestModel} from '../../models/api/search/search-request.model';
import {FilterService} from '../../services/filter/filter.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    public searchPhrase: string = '';

    public constructor(public authService: AuthService, private filterService: FilterService) {}

    public async searchSubmitHandler(): Promise<void> {
        this.filterService.filter.searchPhrase = this.searchPhrase;
        await this.filterService.navigateToSearchPage();
    }
}
