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
     * @param pokemon_url: the pokemon url (gave by the api)
     * @returns the Resource for the pokemon with pokemon_index as National Pokédex Number
     */
    getPokemon(pokemon_url: string): Observable<PokemonRes> {
        return this.http.get<PokemonRes>(pokemon_url);
    }

}
