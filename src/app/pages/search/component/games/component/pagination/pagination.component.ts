import {Component, Input} from '@angular/core';
import {FilterService} from '../../../../../../services/filter/filter.service';
import {generateRange} from '../../../../../../utils/array.utils';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
    @Input() public pageSize: number = 0;
    @Input() public totalCount: number = 0;

    public constructor(public filterService: FilterService) {}

    public get allPagesCount(): number {
        if (this.pageSize !== 0) {
            return Math.ceil(this.totalCount / this.pageSize);
        } else {
            return 0;
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
