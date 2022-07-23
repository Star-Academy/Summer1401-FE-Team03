import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';
import {SearchBoxModule} from './search-box/search-box.module';
import {DividerVerticalModule} from '../divider-vertical/divider-vertical.module';

@NgModule({
    declarations: [HeaderComponent],
    imports: [CommonModule, SearchBoxModule, DividerVerticalModule],
    exports: [HeaderComponent],
})
export class HeaderModule {}
