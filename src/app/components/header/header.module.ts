import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';
import {SearchBoxModule} from './component/search-box/search-box.module';
import {DividerVerticalModule} from '../divider-vertical/divider-vertical.module';
import {RouterModule} from '@angular/router';
import {NgxPopperjsModule} from 'ngx-popperjs';
import {ProfileButtonComponent} from './component/profile-button/profile-button.component';

@NgModule({
    declarations: [HeaderComponent, ProfileButtonComponent],
    imports: [CommonModule, SearchBoxModule, NgxPopperjsModule, DividerVerticalModule, RouterModule],
    exports: [HeaderComponent],
})
export class HeaderModule {}
