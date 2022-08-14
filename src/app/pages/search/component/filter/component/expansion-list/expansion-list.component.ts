import {ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {ExpansionListModel} from '../../../../models/expantion-list.model';
import {FilterService} from '../../../../../../services/filter/filter.service';

@Component({
    selector: 'app-expansion-list',
    templateUrl: './expansion-list.component.html',
    styleUrls: ['./expansion-list.component.scss'],
})
export class ExpansionListComponent {
    @Input() public title: string = '';
    @Input() public expansionListItems: ExpansionListModel[] = [];

    @ViewChild('list') public list: ElementRef | null = null;

    public constructor(private changeDetectorRef: ChangeDetectorRef, private filterService: FilterService) {}

    public isExpanded: boolean = false;
    public searchPhrase: string = '';

    public setPlaceholderText(): string {
        return `${this.title} مدنظرت رو جستجو کن `;
    }

    public async changeStatus(id: number, status: boolean): Promise<void> {
        if (status) {
            this.filterService.setGenre(id);
        } else {
            this.filterService.deleteGenre(id);
        }
        await this.filterService.navigateToSearchPage();
    }

    public expand(): void {
        this.isExpanded = !this.isExpanded;
        this.changeDetectorRef.detectChanges();

        const first = this.list?.nativeElement.getBoundingClientRect();
        this.list?.nativeElement.classList.toggle('flip');
        const last = this.list?.nativeElement.getBoundingClientRect();

        const deltaX = first?.left ?? 0 - last?.left ?? 0;
        const deltaY = first?.top ?? 0 - last?.top ?? 0;

        // prettier-ignore
        this.list?.nativeElement.animate([
            {transform: `translate(${deltaX}px, ${deltaY}px`},
            {transform: `translate(0)`},
        ]);
    }
}
