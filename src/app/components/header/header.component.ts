import {Component} from '@angular/core';
import {AuthService} from '../../services/api/auth/auth.service';
import {Router} from '@angular/router';
import {SearchRequestModel} from '../../models/api/search/search-request.model';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    public searchPhrase: string = '';

    public constructor(private router: Router, public authService: AuthService) {}

    public async searchSubmitHandler(): Promise<void> {
        let searchObject: SearchRequestModel = {};
        searchObject.searchPhrase = this.searchPhrase;

        await this.router.navigate(['/search'], {
            queryParams: {filter: JSON.stringify(searchObject)},
        });
    }
}
