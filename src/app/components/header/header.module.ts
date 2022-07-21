import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {SearchBoxModule} from './search-box/search-box.module';
import {DividerVerticalModule} from './divider-vertical/divider-vertical.module';
import {NgxPopperjsModule} from 'ngx-popperjs';



@NgModule({
    declarations: [
        HeaderComponent,
    ],
    imports: [
        CommonModule,
        SearchBoxModule,
        DividerVerticalModule,
        NgxPopperjsModule
    ],
    exports: [
        HeaderComponent,
    ],
})
export class HeaderModule { }
