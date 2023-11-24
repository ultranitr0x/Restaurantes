import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AgregarComponent } from "./pages/agregar/agregar.component";
import { BuscarComponent } from "./pages/buscar/buscar.component";
import { ListadoComponent } from "./pages/listado/listado.component";
import { RestauranteComponent } from "./pages/restaurante/restaurante.component";
import { HomeComponent } from "./pages/home/home.component";

const routes:Routes =[
  {
    path: '',component: HomeComponent , children: [
      { path: 'listado', component: ListadoComponent },
      { path: 'agregar', component: AgregarComponent },
      { path: 'editar/:id', component: AgregarComponent },
      { path: 'buscar', component: BuscarComponent },
      { path: ':id', component: RestauranteComponent },
      { path: '**', redirectTo:'listado' }
    ]
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})

export class RestaurantesRoutingModule { }
