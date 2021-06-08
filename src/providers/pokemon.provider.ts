import {Pokemon} from '../models/pokemon';
import PokeAPI from 'pokeapi-typescript';
import {pokemonMapper} from '../mappers/pokemon.mapper';

export const pokemonProvider = async (name: string): Promise<Pokemon> => {
  const rawPokemon = await PokeAPI.Pokemon.resolve(name);
  const rawMoves = await Promise.all(rawPokemon.moves.slice(0, 4).map(async move => {
    return PokeAPI.Move.resolve(move.move.name);
  }));

  return pokemonMapper(rawPokemon, rawMoves);
};
