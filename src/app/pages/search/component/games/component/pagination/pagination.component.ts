import {Component, Input, OnInit} from '@angular/core';
import {GameService} from '../../../../../../services/api/game/game.service';
import {FilterService} from '../../../../../../services/filter/filter.service';
import {generateRange} from '../../../../../../utils/array.utils';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
    @Input() public pageSize: number = 0;
    @Input() public totalCount: number = 0;

    public selectedPage: number = 1;
    public allPagesCount: number = 0;
    public shownPages: number[] = [];

    public constructor(private gameService: GameService, private filterService: FilterService) {}

    public ngOnInit(): void {
        if (this.pageSize !== 0) {
            this.allPagesCount = Math.ceil(this.totalCount / this.pageSize);
            this.shownPages = this.setShownPages();
        }
    }

    public setShownPages(): number[] {
        let start = 1;
        let end = this.allPagesCount;

        if (end <= 5) {
            return generateRange(start, end, 1);
        }

        start = Math.max(this.selectedPage - 2, 1);
        end = start + 4;

        if (end > this.allPagesCount) {
            end = this.allPagesCount;
            start = end - 4;
        }
        return generateRange(start, end, 1);
    }

    public async nextPage(): Promise<void> {
        if (this.selectedPage === this.allPagesCount) return;

        this.selectedPage += 1;
        await this.changePage();
    }

    public async previousPage(): Promise<void> {
        if (this.selectedPage === 1) return;

        this.selectedPage -= 1;
        await this.changePage();
    }

    public async goToPage(pageNumber: number): Promise<void> {
        this.selectedPage = pageNumber;
        await this.changePage();
    }

    private async changePage(): Promise<void> {
        this.shownPages = this.setShownPages();
        this.filterService.options.offset = this.selectedPage - 1;
        await this.filterService.navigateToSearchPage();
    }
}
