import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Pokemon} from '../../../models/pokemon';
import PokeAPI, {IMove, IPokemon} from 'pokeapi-typescript';
import {HttpClient} from '@angular/common/http';
import {pokemonMapper} from '../../../mappers/pokemon.mapper';

@Injectable({
    providedIn: 'root'
})
export class PokemonProviderService {
    readonly POKE_API_URL = 'https://pokeapi.co/api/v2/';

    constructor(private httpClient: HttpClient) {
    }

    provide(name: string): Observable<Pokemon | null> {
        return new Observable<Pokemon | null>(subscriber => {
            this.searchPokemon(name.toLowerCase()).subscribe(async pokemon => {
                if (!pokemon) {
                    subscriber.next(null);
                    return;
                } else {
                    const moves = await Promise.all<IMove>(pokemon.moves.slice(0, 4).map(async move => {
                        return PokeAPI.Move.resolve(move.move.name);
                    }));
                    subscriber.next(pokemonMapper(pokemon, moves));
                }
            });
        });
    }

    searchPokemon(name: string): Observable<IPokemon | null> {
        return this.httpClient.get<IPokemon>(`${this.POKE_API_URL}pokemon/${name}`);
    }
}
