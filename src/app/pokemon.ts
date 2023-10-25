// from [pokedex](https://www.pokemon.com/us/pokedex/)
enum PokemonType {
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
}
