import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {GameService} from '../../../../../../services/api/game/game.service';
import {FilterService} from '../../../../../../services/filter/filter.service';
import {generateRange} from '../../../../../../utils/array.utils';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnChanges {
    @Input() public pageSize: number = 0;
    @Input() public totalCount: number = 0;

    public allPagesCount: number = 0;

    public constructor(private gameService: GameService, public filterService: FilterService) {}

    public ngOnChanges(changes: SimpleChanges): void {
        if (this.pageSize !== 0) {
            this.allPagesCount = Math.ceil(this.totalCount / this.pageSize);
        }
    }

    public get shownPages(): number[] {
        let start = 1;
        let end = this.allPagesCount;

        if (end <= 5) {
            return generateRange(start, end, 1);
        }

        start = Math.max(this.filterService.options.offset - 1, 1);
        end = start + 4;

        if (end > this.allPagesCount) {
            end = this.allPagesCount;
            start = end - 4;
        }
        return generateRange(start, end, 1);
    }

    public async nextPage(): Promise<void> {
        if (this.filterService.options.offset + 1 === this.allPagesCount) return;

        this.filterService.options.offset += 1;
        await this.filterService.navigateToSearchPage(false);
    }

    public async previousPage(): Promise<void> {
        if (this.filterService.options.offset === 0) return;

        this.filterService.options.offset -= 1;
        await this.filterService.navigateToSearchPage(false);
    }

    public async goToPage(pageNumber: number): Promise<void> {
        this.filterService.options.offset = pageNumber - 1;
        await this.filterService.navigateToSearchPage(false);
    }
}
