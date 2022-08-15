import {Component, OnInit} from '@angular/core';
import {SpinnerService} from './service/spinner/spinner.service';

@Component({
    selector: 'app-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
    public constructor(public spinnerService: SpinnerService) {}
}
