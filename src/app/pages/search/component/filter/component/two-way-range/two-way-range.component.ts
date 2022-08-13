import {Component} from '@angular/core';
import {FilterService} from '../../../../../../services/filter/filter.service';

@Component({
    selector: 'app-two-way-range',
    templateUrl: './two-way-range.component.html',
    styleUrls: ['./two-way-range.component.scss'],
})
export class TwoWayRangeComponent {
    public valueOne: number = 0;
    public valueTwo: number = 100;
    public backgroundColor: {[klass: string]: any} = {
        'background-image': 'linear-gradient(to right, var(--primary-color-light), var(--primary-color-light))',
    };
    private readonly GAP: number = 5;

    public constructor(private filterService: FilterService) {}

    public slideOne(): void {
        console.log(this.valueTwo - this.valueOne);
        if (this.valueTwo - this.valueOne <= this.GAP) {
            this.valueOne = this.valueTwo - this.GAP;
        }
        this.fillColor();
        this.filterService.minRate(this.valueOne);
        this.filterService.navigateToSearchPage();
    }

    public slideTwo(): void {
        if (this.valueTwo - this.valueOne <= this.GAP) {
            this.valueTwo = this.valueOne + this.GAP;
        }
        this.fillColor();
        this.filterService.maxRate(this.valueTwo);
        this.filterService.navigateToSearchPage();
    }

    private fillColor(): void {
        this.backgroundColor = {
            'background-image': `linear-gradient(to right, var(--neutral-color-light) ${this.valueOne}% , var(--primary-color-light) ${this.valueOne}% , var(--primary-color-light) ${this.valueTwo}%, var(--neutral-color-light) ${this.valueTwo}%)`,
        };
    }
}
