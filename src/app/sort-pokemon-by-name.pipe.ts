import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sortPokemonByName'
})
export class SortPokemonByNamePipe implements PipeTransform {

    /**
     * @param value pokemons list
     * @returns the list of sorted pokemons
     */
    transform(value: any[]): any {
        // console.log(value)
        if (typeof value !== 'undefined') {
            return value.sort((a, b) => a.value.name.localeCompare(b.value.name));
        }
        return [];
    }

}
