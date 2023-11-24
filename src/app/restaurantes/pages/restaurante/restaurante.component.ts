import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantesService } from '../../services/restaurantes.service';
import { Restaurantes } from '../../interfaces/restaurantes.interface';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})
export class RestauranteComponent {
  constructor(private activatedRoute:ActivatedRoute, private restaurantesService:RestaurantesService,private router:Router){}
  restaurante!:Restaurantes;
  id!:string;

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['id']);
    this.id=this.activatedRoute.snapshot.params['id'];
    this.restaurantesService.getRestaurantePorId(this.id).subscribe(restaurante => this.restaurante=restaurante);
  }
  regresar(){
    this.router.navigate(['/restaurantes/listado']);
  }


}
