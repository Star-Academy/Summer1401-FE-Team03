import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'ageCategory',
})
export class AgeCategoryPipe implements PipeTransform {
    public transform(value: number): string {
        switch (value) {
            case 1:
                return '+3 سال';
            case 2:
                return '+7 سال';
            case 3:
                return '+12 سال';
            case 4:
                return '+16 سال';
            case 5:
                return '+18 سال';
            case 6:
                return 'رده سنی مشخص نشده است.';
            case 7:
                return '+3 سال';
            case 8:
                return 'همه';
            case 9:
                return '+10 سال';
            case 10:
                return '+13 سال';
            case 11:
                return '+17 سال';
            case 12:
                return '+18 سال';
            default:
                return 'رده سنی مشخص نشده است.';
        }
    }
}
