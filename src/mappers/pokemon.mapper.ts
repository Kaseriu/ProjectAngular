import {IMove, IPokemon, IPokemonStat} from 'pokeapi-typescript';
import {Pokemon} from '../models/pokemon';
import {moveListMapper} from './moveList.mapper';

export const pokemonMapper = (pokemon: IPokemon, moves: IMove[]): Pokemon => {
    return new Pokemon({
        name: pokemon.name,
        hp: getStatValueByName('hp', pokemon.stats),
        attackPower: !!getStatValueByName('attack', pokemon.stats) ? getStatValueByName('attack', pokemon.stats) / 500 : 0,
        speed: getStatValueByName('speed', pokemon.stats),
        moveList: moveListMapper(moves),
        sprite: pokemon.sprites.front_default
    });
};

const getStatValueByName = (statName: string, stats: IPokemonStat[]): number => {
    const stat = stats.find(entry => entry.stat.name === statName);
    if (stat === undefined) {
        throw new Error(`Stat ${statName} not found`);
    }
    return stat.base_stat;
};
