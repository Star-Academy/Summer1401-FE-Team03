import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AgeCategoryPipe} from './age-category.pipe';

@NgModule({
    declarations: [AgeCategoryPipe],
    exports: [AgeCategoryPipe],
    imports: [CommonModule],
})
export class AgeCategoryModule {}
