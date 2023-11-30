import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurantes } from '../interfaces/restaurantes.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RestaurantesService {

  constructor( private http: HttpClient) { }
  private baseUrl:string = environment.baseUrl
  getRestaurante(): Observable<Restaurantes[]>{
    return this.http.get<Restaurantes[]>(this.baseUrl + '/Restaurantes');
  }
  getRestaurantePorId(id:string): Observable<Restaurantes>{
    return this.http.get<Restaurantes>(this.baseUrl+'/Restaurantes/'+id);
  }
  getSugerencias(termino: string):Observable<Restaurantes[]>{
    return this.http.get<Restaurantes[]>(this.baseUrl + '/Restaurantes?nombre_like='+termino+'&_limit=6');
  }

}
