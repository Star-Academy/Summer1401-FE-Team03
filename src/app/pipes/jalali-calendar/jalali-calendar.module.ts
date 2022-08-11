import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JalaliCalendarPipe} from './jalali-calendar.pipe';

@NgModule({
    declarations: [JalaliCalendarPipe],
    exports: [JalaliCalendarPipe],
    imports: [CommonModule],
})
export class JalaliCalendarModule {}
