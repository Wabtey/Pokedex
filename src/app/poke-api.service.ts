import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(private http: HttpClient) { }
  getPokemon() {
    this.http.get('https://pokeapi.co/api/v2/pokemon/')
             .subscribe((data) => console.log(data));
  }
}
