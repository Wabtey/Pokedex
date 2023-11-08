export interface PokeServiceRes {
    count: number;
    next: string;
    previous: string;
    results: IPokemon[];
}

export interface IPokemon {
    name: string;
    url: string;
}

// from [pokedex](https://www.pokemon.com/us/pokedex/)
export enum PokemonType {
    Water,
    Fire,
    Ice,
    Electric,
    Ground,
    Grass,
    Normal,
    Fighting,
}

export class Pokemon {
    // type PokeDex = { 
    //     [name: string]: [string, boolean]; 
    // }
    constructor(public id: number, public name: string, public type: PokemonType, public weaknesses: PokemonType[], public url: string) {
    }
}
