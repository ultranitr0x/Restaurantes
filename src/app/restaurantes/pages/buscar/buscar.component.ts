import { Component } from '@angular/core';
import { Restaurantes } from '../../interfaces/restaurantes.interface';
import { RestaurantesService } from '../../services/restaurantes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {
  termino: string =''; // termino de busqueda
  restaurantes: Restaurantes[]=[];  // Ctrl + pto
  restauranteencontrado:boolean = false
  restauranetSeleccionado:Restaurantes|undefined
  constructor(private restaurantesService: RestaurantesService) { }

  buscando(){
    //this.heroesService.getHeroes().subscribe(heroes => this.heroes=heroes); 
    this.restaurantesService.getSugerencias(this.termino).subscribe(restaurantes => {
      if(restaurantes.length===0){this.restauranteencontrado=true;} else {this.restauranteencontrado=false;}
        this.restaurantes=restaurantes;})  
  }
  opcionSeleccionada(event:MatAutocompleteSelectedEvent){
      const restaurante: Restaurantes = event.option.value;
      if(restaurante === undefined){
        this.restauranetSeleccionado = undefined
        return;
      }
      //console.log(heroe);
      this.termino=restaurante.nombre; //para que se vea en el input
      this.restaurantesService.getRestaurantePorId(restaurante.id!)
            .subscribe(restaurante=> this.restauranetSeleccionado= restaurante);
    }
}
