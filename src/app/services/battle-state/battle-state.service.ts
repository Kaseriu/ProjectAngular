import {Injectable} from '@angular/core';
import {Pokemon} from '../../../models/pokemon';
import {pokemonProvider} from '../../../providers/pokemon.provider';

@Injectable({
  providedIn: 'root'
})
export class BattleStateService{

  firstPokemon: Pokemon;
  secondPokemon: Pokemon;
  constructor() {
    // pokemonProvider('pikachu').then(pokemon => this.firstPokemon = pokemon);
    // pokemonProvider('pikachu').then(pokemon => this.secondPokemon = pokemon);

    const pikachu = new Pokemon({
      name: 'Pikachu',
      hp: 100,
      attackPower: 55,
      speed: 90,
      moveList: [
        {
          name: 'Eclair',
          power: 0.40
        },
        {
          name: 'Étincelle',
          power: 0.65
        },
        {
          name: 'Fatal Foudre',
          power: 0.110
        }
      ]
    });
    const magicarpe = new Pokemon({
      name: 'Magicarpe',
      hp: 100,
      attackPower: 10,
      speed: 80,
      moveList: [
        {
          name: 'Trempette',
          power: 0
        },
        {
          name: 'Charge',
          power: 0.40
        },
        {
          name: 'Fléau',
          power: 0
        }
      ]
    });
    this.firstPokemon = pikachu;
    this.secondPokemon = magicarpe;
  }
}
