import { Component } from '@angular/core';
import { RestaurantesService } from '../../services/restaurantes.service';
import { Restaurantes } from '../../interfaces/restaurantes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  restaurantes: Restaurantes[]=[];
  constructor(private restaurantesService: RestaurantesService) { }

  ngOnInit(): void {
    this.restaurantesService.getRestaurante().subscribe(resp => 
      {
        this.restaurantes=resp;
      });
    //this.heroesService.getHeroes().subscribe(resp => console.log(resp));
    //this.heroesService.getHeroes().subscribe(console.log); //es lo mismo
    }


}
