import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SearchBoxModule } from './search-box/search-box.module';
import { DividerVerticalModule } from './divider-vertical/divider-vertical.module';
import { NgxPopperjsModule } from 'ngx-popperjs';
let HeaderModule = class HeaderModule {
};
HeaderModule = __decorate([
    NgModule({
        declarations: [HeaderComponent],
        imports: [CommonModule, SearchBoxModule, DividerVerticalModule, NgxPopperjsModule],
        exports: [HeaderComponent],
    })
], HeaderModule);
export { HeaderModule };
//# sourceMappingURL=header.module.js.map