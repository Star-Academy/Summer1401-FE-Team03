import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'ageCategoryType',
})
export class AgeCategoryTypePipe implements PipeTransform {
    public transform(type: number): string {
        switch (type) {
            case 1:
                return 'ESRB';
            case 2:
                return 'PEGI';
            default:
                return '';
        }
    }
}
