import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokeServiceRes } from './pokemon';

@Injectable({
    providedIn: 'root'
})
export class PokeApiService {

    constructor(private http: HttpClient) { }
    getPokemon(): Observable<PokeServiceRes> {
        return this.http.get<PokeServiceRes>('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0/');
    }
}
