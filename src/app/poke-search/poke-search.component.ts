import { Component, OnInit } from '@angular/core';
import { IPokemon, Pokemon, PokemonType, PokemonTypeFromAPI, default_pokemon_type } from '../pokemon';
import { PokeApiService } from '../poke-api.service';

export enum SortOption {
    NumericalAscending,
    NumericalDescending,
    AlphabeticAscending,
    AlphabeticDescending,
}

@Component({
    selector: 'app-poke-search',
    templateUrl: './poke-search.component.html',
    styleUrls: ['./poke-search.component.css'],
    providers: [PokeApiService]
})
export class PokeSearchComponent implements OnInit {
    $id: string = '';
    selectedPokeId: string = '';
    sort_option: SortOption = SortOption.NumericalAscending;

    /**
     * the key is their id -> value:
     * [
     *   id,
     *   name,
     *   types,
     *   weaknesses,
     *   api url to query the pokemon,
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

    // FIXME: On the first Init, the type are not shown. (we must refresh the list to see them...)

    ngOnInit(): void {
        console.log("Init!")


        var pokemonMapTemp: Record<number, Pokemon> = {}

        // IDEA: dig the API's docs to find if we can query directly all the pokemon with specific resource (types, weaknesses, etc)
        this.pokeService.getAllPokemons().subscribe((data) => {
            // console.log(data)
            data.results.forEach((element: any, index: number) => {

                var pokemon_index: number = index + 1;
                var pokemon_types: PokemonType[] = [];
                this.pokeService.getPokemon(element.url).subscribe((pokemon_resource) => {
                    // if (index + 1 == 1195) {
                    //     console.log(pokemon_resource)
                    // }
                    // pokemon_index = pokemon_resource.id;

                    pokemon_resource.types.forEach((types_element: PokemonTypeFromAPI, _) => {
                        pokemon_types.push(PokemonType[types_element.type.name as keyof typeof PokemonType])
                    })
                });

                var pokemonName = element.name.replace(/^\w/, (c: string) => c.toUpperCase());
                pokemonMapTemp[pokemon_index] =
                    new Pokemon(pokemon_index, pokemonName, pokemon_types, [], element.url)
            });
        });

        // force reload
        this.pokemonMap = pokemonMapTemp;
    }

    go() {
        this.selectedPokeId = this.$id
    }

    clear() {
        this.$id = ""
        this.go()
    }

    switchSorting(sort_option_string: String) {
        this.sort_option = SortOption[sort_option_string as keyof typeof SortOption]
    }
}


