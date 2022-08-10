import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'imageSource',
})
export class ImageSourcePipe implements PipeTransform {
    public transform(type: string, id?: string): string {
        if (id) {
            return `https://images.igdb.com/igdb/image/upload/t_${type}/${id}.jpg`;
        } else {
            return 'assets/card-images/no-image.webp';
        }
    }
}
