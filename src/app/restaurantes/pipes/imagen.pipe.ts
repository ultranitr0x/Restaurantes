import { Pipe, PipeTransform } from '@angular/core';
import { Restaurantes } from '../interfaces/restaurantes.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(restaurantes:Restaurantes): string {
    return 'assets/Restaurantes/' + restaurantes.imagen;
  }


}
