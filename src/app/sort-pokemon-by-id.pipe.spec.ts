import { SortPokemonByIdPipe } from './sort-pokemon-by-id.pipe';

describe('SortPokemonByIdPipe', () => {
  it('create an instance', () => {
    const pipe = new SortPokemonByIdPipe();
    expect(pipe).toBeTruthy();
  });
});
