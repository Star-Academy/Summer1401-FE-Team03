import {ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {ExpansionListModel} from '../../models/expantion-list.model';

@Component({
    selector: 'app-expansion-list',
    templateUrl: './expansion-list.component.html',
    styleUrls: ['./expansion-list.component.scss'],
})
export class ExpansionListComponent {
    @Input() public title: string = '';
    @Input() public expansionList: ExpansionListModel[] = [];

    @Output() public itemsChange = new EventEmitter<ExpansionListModel[]>();

    @ViewChild('list') public list: ElementRef | null = null;

    public constructor(private changeDetectorRef: ChangeDetectorRef) {}

    public isExpanded: boolean = false;
    public searchPhrase: string = '';

    public setPlaceholderText(): string {
        return `${this.title} مدنظرت رو جستجو کن `;
    }

    public expand(): void {
        this.isExpanded = !this.isExpanded;
        this.changeDetectorRef.detectChanges();

        const first = this.list?.nativeElement.getBoundingClientRect();
        this.list?.nativeElement.classList.toggle('flip');
        const last = this.list?.nativeElement.getBoundingClientRect();

        const deltaX = first.left - last.left;
        const deltaY = first.top - last.top;

        // prettier-ignore
        this.list?.nativeElement.animate([
            {transform: `translate(${deltaX}px, ${deltaY}px`},
            {transform: `translate(0)`},
        ]);
    }
}
