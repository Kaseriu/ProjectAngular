import {Pokemon} from '../models/pokemon';
import {pokemonMapper} from '../mappers/pokemon.mapper';
import PokeAPI, {IMove} from 'pokeapi-typescript';
import {Observable} from 'rxjs';

const POKE_API_URL = 'https://pokeapi.co/api/v2/';

export const pokemonProvider = (name: string): Observable<Pokemon> => {
    return searchPokemon(name);
};

const searchPokemon = (name: string): Observable<Pokemon> => {
    try {
        return new Observable<Pokemon>(subscriber => {
            fetch(`${POKE_API_URL}pokemon/${name}`).then(value => {
                    value.json().then(pokemon => {
                            Promise.all<IMove>(pokemon.moves.slice(0, 4).map(async move => {
                                return PokeAPI.Move.resolve(move.move.name);
                            })).then(moves => {
                                subscriber.next(pokemonMapper(pokemon, moves));
                            });
                        }
                    );
                }
            );
        });
    } catch (e) {
        console.error(e);
    }
};
