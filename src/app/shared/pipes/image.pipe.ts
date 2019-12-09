import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'image'
})
export class ImagePipe implements PipeTransform {
    transform(path: any): any {
        return `/assets/images/${path}`;
    }
}
