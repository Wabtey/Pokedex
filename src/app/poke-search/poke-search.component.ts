import { Component, OnInit } from '@angular/core';
import { IPokemon, Pokemon, PokemonType, PokemonTypeFromAPI } from '../pokemon';
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
        // IDEA: dig the API's docs to find if we can query directly all the pokemon with specific resource (types, weaknesses, etc)
        this.pokeService.getAllPokemons().subscribe((data) => {
            // console.log(data)
            data.results.forEach((element: any, index: number) => {

                var pokemon_types: PokemonType[] = [];
                this.pokeService.getPokemon(index + 1).subscribe((pokemon_resource) => {
                    pokemon_resource.types.forEach((types_element: PokemonTypeFromAPI, _) => {
                        // console.log(types_element.type.name);
                        // console.log(PokemonType[types_element.type.name as keyof typeof PokemonType]);
                        pokemon_types.push(PokemonType[types_element.type.name as keyof typeof PokemonType])
                    })
                });

                var pokemonName = element.name.replace(/^\w/, (c: string) => c.toUpperCase());
                this.pokemonMap[index + 1] =
                    new Pokemon(index + 1, pokemonName, pokemon_types, [], element.url)
            });
        });
    }

    go() {
        this.selectedPokeId = this.id
    }
}


