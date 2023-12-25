import { Pipe, PipeTransform } from '@angular/core';
import { SortOption } from './poke-search/poke-search.component';

@Pipe({
    name: 'sortOption'
})
export class SortOptionPipe implements PipeTransform {

    /**
     * @param value pokemons list
     * @returns the list of sorted pokemons
     */
    transform(value: any[], sort_option: SortOption): any {
        // console.log(value)
        if (typeof value !== 'undefined') {
            switch (sort_option) {
                case SortOption.NumericalAscending:
                    return value.sort((a, b) => a.key - b.key);
                case SortOption.NumericalDescending:
                    return value.sort((a, b) => b.key - a.key);
                case SortOption.AlphabeticAscending:
                    return value.sort((a, b) => a.value.name.localeCompare(b.value.name));
                case SortOption.AlphabeticDescending:
                    return value.sort((a, b) => b.value.name.localeCompare(a.value.name));
                default:
                    return [];
            }
        }
        return [];
    }

}
