import { SortPokemonByNamePipe } from './sort-pokemon-by-name.pipe';

describe('SortPokemonByNamePipe', () => {
  it('create an instance', () => {
    const pipe = new SortPokemonByNamePipe();
    expect(pipe).toBeTruthy();
  });
});
