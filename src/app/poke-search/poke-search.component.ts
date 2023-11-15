import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonType } from '../pokemon';
import { PokeApiService } from '../poke-api.service';

@Component({
    selector: 'app-poke-search',
    templateUrl: './poke-search.component.html',
    styleUrls: ['./poke-search.component.css'],
    providers: [PokeApiService]
})
export class PokeSearchComponent implements OnInit {
    id: string = '';
    selectedPokeId: string = '';

    /**
     * the key is their id -> value:
     * [
     *   name,
     *   type,
     *   weaknesses
     * ]
     */
    pokemonMap: Record<number, Pokemon> = {}

    // Example: 
    /*
    ```ts
    pokemonMap: Record<number, Pokemon> = {
        50: new Pokemon(50, 'Diglett', PokemonType.Ground, [PokemonType.Water, PokemonType.Grass, PokemonType.Ice], ''),
        51: new Pokemon(51, 'Dugtrio', PokemonType.Ground, [PokemonType.Water, PokemonType.Grass, PokemonType.Ice], ''),
        52: new Pokemon(52, 'Meowth', PokemonType.Normal, [PokemonType.Fighting], ''),
        53: new Pokemon(53, 'Persian', PokemonType.Normal, [PokemonType.Fighting], ''),
        54: new Pokemon(54, 'Psyduck', PokemonType.Water, [PokemonType.Grass, PokemonType.Electric], ''),
        55: new Pokemon(55, 'Goldduck', PokemonType.Water, [PokemonType.Grass, PokemonType.Electric], '')
    }
    ```
    */

    constructor(private pokeService: PokeApiService) { }

    ngOnInit(): void {
        this.pokeService.getPokemon().subscribe((data) => {
            console.log(data)
            data.results.forEach((element: any, index: number) => {
                this.pokemonMap[index] =
                    new Pokemon(index + 1, element.name, PokemonType.Water, [], element.url)
            });
        });
    }

    go() {
        this.selectedPokeId = this.id
    }
}


