import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards.component';
import { CardModule } from '../card/card.module';
let CardsModule = class CardsModule {
};
CardsModule = __decorate([
    NgModule({
        declarations: [CardsComponent],
        imports: [CommonModule, CardModule],
        exports: [CardsComponent],
    })
], CardsModule);
export { CardsModule };
//# sourceMappingURL=cards.module.js.map