import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/api/auth/auth.service';
import {FilterService} from '../../services/filter/filter.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    public constructor(public authService: AuthService, public filterService: FilterService) {}

    public async searchSubmitHandler(event: Event): Promise<void> {
        event.preventDefault();

        await this.filterService.navigateToSearchPage();
    }
}
