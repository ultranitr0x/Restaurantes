import { Component, Input } from '@angular/core';
import { Restaurantes } from '../../interfaces/restaurantes.interface';

@Component({
  selector: 'app-restaurante-tarjeta',
  templateUrl: './restaurante-tarjeta.component.html',
  styleUrls: ['./restaurante-tarjeta.component.css']
})
export class RestauranteTarjetaComponent {
 @Input() restaurante !: Restaurantes
}
