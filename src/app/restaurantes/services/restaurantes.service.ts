import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurantes } from '../interfaces/restaurantes.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantesService {

  constructor( private http: HttpClient) { }
  getRestaurante(): Observable<Restaurantes[]>{
    return this.http.get<Restaurantes[]>('http://localhost:3000/Restaurantes');
  }
  getRestaurantePorId(id:string): Observable<Restaurantes>{
    return this.http.get<Restaurantes>('http://localhost:3000/Restaurantes/'+id);
  }


}
