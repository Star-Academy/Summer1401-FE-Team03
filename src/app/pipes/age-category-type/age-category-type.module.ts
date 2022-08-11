import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AgeCategoryTypePipe} from './age-category-type.pipe';

@NgModule({
    declarations: [AgeCategoryTypePipe],
    exports: [AgeCategoryTypePipe],
    imports: [CommonModule],
})
export class AgeCategoryTypeModule {}
