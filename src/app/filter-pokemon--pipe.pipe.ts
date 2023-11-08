import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPokemonPipe'
})
export class FilterPokemonPipePipe implements PipeTransform {

    transform(value: any[], searchString?: string): any {
        if (typeof value !== 'undefined' && typeof searchString === 'undefined') {
            return value;
        } else if (typeof value !== 'undefined' && typeof searchString !== 'undefined') {
            // if the search contains a number
            if (!Number.isNaN(parseInt(searchString))) {
                return value.filter(
                    (e) => {
                        return e.key.includes(parseInt(searchString))
                    }
                );
            } else {
                return value.filter(
                    (e) => {
                        return e.value[0].toLowerCase().includes(searchString.toLowerCase())
                    }
                );
            }
            
        } else {
            return [];
        }
    }

}
