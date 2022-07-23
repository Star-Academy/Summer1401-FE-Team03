import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { CardsModule } from '../../components/cards/cards.module';
let HomeModule = class HomeModule {
};
HomeModule = __decorate([
    NgModule({
        declarations: [HomeComponent, SlideshowComponent],
        imports: [CommonModule, CardsModule],
    })
], HomeModule);
export { HomeModule };
//# sourceMappingURL=home.module.js.map