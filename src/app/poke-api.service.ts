import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokeServiceRes, PokemonRes } from './pokemon';

@Injectable({
    providedIn: 'root'
})
export class PokeApiService {

    constructor(private http: HttpClient) { }
    getAllPokemons(): Observable<PokeServiceRes> {
        return this.http.get<PokeServiceRes>('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0/');
    }

    /**
     * 
     * @param pokemon_index: the ingame pokedex official national number
     * @returns the Resource for the pokemon with pokemon_index as National Pokédex Number
     */
    getPokemon(pokemon_index: number): Observable<PokemonRes> {
        return this.http.get<PokemonRes>('https://pokeapi.co/api/v2/pokemon/' + pokemon_index);
    }

}
