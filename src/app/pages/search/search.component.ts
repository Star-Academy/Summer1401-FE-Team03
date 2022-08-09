import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreadCrumbModel} from './models/bread-crumb.model';
import {GameService} from '../../services/api/game/game.service';
import {FilterService} from '../../services/filter/filter.service';
import {GamesSortTypes} from '../../models/enum/games-sort.types';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
    public GamesSortTypes = GamesSortTypes;

    public constructor(public gameService: GameService, public filterService: FilterService) {}
    public breadcrumbs: BreadCrumbModel[] = [
        {title: 'خانه', url: '/'},
        {title: 'جستجو', url: '/search'},
    ];

    public games: {imageSrc: string; title: string; rating: number; platform: string}[] = [
        {imageSrc: '', title: 'red dead redemption 2', platform: 'window', rating: 5.6},
        {imageSrc: '', title: 'stray', platform: 'mac', rating: 6.6},
        {imageSrc: '', title: 'call of duty', platform: 'xbox', rating: 5.2},
        {imageSrc: '', title: 'modern warfare 3', platform: 'play station 2', rating: 5.5},
        {imageSrc: '', title: 'assassins creed', platform: 'window', rating: 8.2},
        {imageSrc: '', title: 'witcher 3', platform: 'linux', rating: 5.2},
        {imageSrc: '', title: 'most wanted 2', platform: 'mac', rating: 7.2},
        {imageSrc: '', title: 'underground 2', platform: 'xbox', rating: 3.2},
        {imageSrc: '', title: 'pes 2022', platform: 'play station 4', rating: 4.3},
    ];

    public async ngOnInit(): Promise<void> {
        await this.filterService.searchByFilters();
    }

    public ngOnDestroy(): void {
        this.filterService.clearFilter();
    }

    public async changeSortingFilter(sortNumber: number): Promise<void> {
        this.filterService.changeSortType(sortNumber);
        await this.filterService.navigateToSearchPage();
    }
}
