import {Component, HostListener, OnInit} from '@angular/core';
import {AuthService} from '../../services/api/auth/auth.service';
import {FilterService} from '../../services/filter/filter.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    public constructor(public authService: AuthService, public filterService: FilterService) {}

    public mobileSearchBoxShown: boolean = false;
    public windowInnerWidth = window.innerWidth;

    public async searchSubmitHandler(event: Event): Promise<void> {
        event.preventDefault();

        await this.filterService.navigateToSearchPage();
    }

    @HostListener('window:resize', ['$event'])
    onWindowResize(): void {
        this.windowInnerWidth = window.innerWidth;
    }
}
