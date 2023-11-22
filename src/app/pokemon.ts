export interface PokeServiceRes {
    count: number;
    next: string;
    previous: string;
    results: IPokemon[];
}

/**
 * XXX: shared type for two things kinda different (`PokeServiceRes.results` and `PokemonRes.types[x].type`)
 * DOC: rename it in NameUrl ? 
 */
export interface IPokemon {
    name: string;
    url: string;
}

/**
 * `any` as type for now...
 */
export interface PokemonRes {
    abilities: any[];
    base_experience: number;
    form: any[];
    game_indices: any[];
    height: number;
    held_items: any[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: any[];
    name: string;
    order: number;
    past_abilities: any[];
    past_type: any[];
    species: any[];
    // TODO: display `official-artwork`
    sprites: any[];
    // TODO: display `stats`
    stats: any[];
    // TODO: display `type`
    types: PokemonTypeFromAPI[];
    weight: number;
}

export interface PokemonTypeFromAPI {
    slot: number;
    type: IPokemon;
}

// from [pokedex](https://www.pokemon.com/us/pokedex/)
export enum PokemonType {
    water = "water",
    fire = "fire",
    ice = "ice",
    electric = "electric",
    ground = "ground",
    rock = "rock",
    grass = "grass",
    normal = "normal",
    fighting = "fighting",
    flying = "flying",
    poison = "poison",
    bug = "bug",
    ghost = "ghost",
    steel = "steel",
    psychic = "psychic",
    fairy = "fairy",
    shadow = "shadow",
    unknown = "unknown",
}

export var default_pokemon_type = PokemonType.unknown;

export class Pokemon {
    // type PokeDex = { 
    //     [name: string]: [string, boolean]; 
    // }
    constructor(public id: number, public name: string, public types: PokemonType[], public weaknesses: PokemonType[], public url: string) {
    }
}
