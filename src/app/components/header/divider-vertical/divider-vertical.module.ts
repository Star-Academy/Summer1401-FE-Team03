import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DividerVerticalComponent} from './divider-vertical.component';

@NgModule({
    declarations: [DividerVerticalComponent],
    exports: [DividerVerticalComponent],
    imports: [CommonModule],
})
export class DividerVerticalModule {}
