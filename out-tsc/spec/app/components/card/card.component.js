import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let CardComponent = class CardComponent {
    constructor() {
        this.src = 'assets/card-images/no-image.jpg';
        this.alt = 'برای این بازی عکسی قرار داده نشده است.';
        this.title = 'بازی';
        this.description = 'توضیحات بازی';
    }
};
__decorate([
    Input()
], CardComponent.prototype, "src", void 0);
__decorate([
    Input()
], CardComponent.prototype, "alt", void 0);
__decorate([
    Input()
], CardComponent.prototype, "title", void 0);
__decorate([
    Input()
], CardComponent.prototype, "description", void 0);
__decorate([
    Input()
], CardComponent.prototype, "price", void 0);
CardComponent = __decorate([
    Component({
        selector: 'app-card',
        templateUrl: './card.component.html',
        styleUrls: ['./card.component.scss'],
    })
], CardComponent);
export { CardComponent };
//# sourceMappingURL=card.component.js.map