import { Component, OnInit } from '@angular/core';
import { PokemonType } from '../pokemon';
import { PokeApiService } from '../poke-api.service';

@Component({
  selector: 'app-poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.css']
})
export class PokeSearchComponent implements OnInit {
    id: string = '';
    selectedPokeId: string = '';

    /**
     * the key is their id -> value:
     * [
     *   name,
     *   type,
     *   weaknesses,
     *   known
     * ]
     */
    pokemonMap : Record<number, [string, PokemonType, PokemonType[], boolean]> = {
        50 : ['Diglett', PokemonType.Ground, [PokemonType.Water, PokemonType.Grass, PokemonType.Ice], false],
        51 : ['Dugtrio', PokemonType.Ground, [PokemonType.Water, PokemonType.Grass, PokemonType.Ice], false],
        52 : ['Meowth', PokemonType.Normal, [PokemonType.Fighting], false],
        53 : ['Persian', PokemonType.Normal, [PokemonType.Fighting], false],
        54 : ['Psyduck', PokemonType.Water, [PokemonType.Grass, PokemonType.Electric], false],
        55 : ['Goldduck', PokemonType.Water, [PokemonType.Grass, PokemonType.Electric], false]
    }

    constructor(private pokeService: PokeApiService) {}

    ngOnInit(): void {
        this.pokeService.getPokemon();
    }

    go() {
        this.selectedPokeId = this.id
    }
}


