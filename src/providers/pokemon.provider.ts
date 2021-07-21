import {Pokemon} from '../models/pokemon';
import {pokemonMapper} from '../mappers/pokemon.mapper';
import PokeAPI, {IMove} from 'pokeapi-typescript';
import {Observable} from 'rxjs';

const POKE_API_URL = 'https://pokeapi.co/api/v2/';

export const pokemonProvider = (name: string): Observable<Pokemon | null> => {
    return searchPokemon(name.toLowerCase());
};

const searchPokemon = (name: string): Observable<Pokemon | null> => {
    try {
        return new Observable<Pokemon | null>(subscriber => {
            fetch(`${POKE_API_URL}pokemon/${name}`).then(value => {
                    if (!value.ok) {
                        subscriber.next(null);
                        return;
                    }
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
