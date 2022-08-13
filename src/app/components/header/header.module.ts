import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';
import {SearchBoxModule} from './component/search-box/search-box.module';
import {DividerVerticalModule} from '../divider-vertical/divider-vertical.module';
import {RouterModule} from '@angular/router';
import {NgxPopperjsModule} from 'ngx-popperjs';
import {HeaderProfileAccessComponent} from './component/header-profile-access/header-profile-access.component';
import {ShoppingCartComponent} from './component/shopping-cart/shopping-cart.component';
import {ImageSourceModule} from '../../pipes/image-source/image-source.module';

@NgModule({
    declarations: [HeaderComponent, HeaderProfileAccessComponent, ShoppingCartComponent],
    imports: [CommonModule, SearchBoxModule, NgxPopperjsModule, DividerVerticalModule, RouterModule, ImageSourceModule],
    exports: [HeaderComponent],
})
export class HeaderModule {}
