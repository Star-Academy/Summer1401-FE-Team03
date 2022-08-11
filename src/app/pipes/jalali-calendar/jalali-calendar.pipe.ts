import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'jalaliCalendar',
})
export class JalaliCalendarPipe implements PipeTransform {
    public transform(value: number): string {
        return new Date(value).toLocaleDateString('fa-IR');
    }
}
