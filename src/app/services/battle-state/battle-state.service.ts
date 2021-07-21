import {Injectable} from '@angular/core';
import {Pokemon} from '../../../models/pokemon';
import {BattleLoggerService} from '../battle-logger/battle-logger.service';
import {interval} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BattleStateService {

  gamePaused = true;
  gameEnded = false;

  attacker: Pokemon = undefined;
  defender: Pokemon = undefined;

  firstPokemon: Pokemon;
  secondPokemon: Pokemon;

  constructor(private battleLoggerService: BattleLoggerService) {
    // pokemonProvider('kakuna').then(pokemon => this.firstPokemon = pokemon);
    // pokemonProvider('kakuna').then(pokemon => this.secondPokemon = pokemon);

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

  rematch(): void {
    window.location.reload();
  }

  fight(): boolean {
    if (this.attacker === undefined && this.defender === undefined) {
      const firstToAtk = this.firstPokemon.attackOrder(this.secondPokemon);
      if (firstToAtk) {
        this.attacker = this.firstPokemon;
        this.defender = this.secondPokemon;
      } else {
        this.attacker = this.secondPokemon;
        this.defender = this.firstPokemon;
      }
    }

    this.battleLoggerService.log(this.attacker.attack(this.defender, Math.floor(Math.random() * this.attacker.moveList.length)));
    if (this.defender.hp > 0) {
      this.battleLoggerService.log({
        text: this.defender.name + ' hp : ' + this.defender.hp + '\n',
        cssClass: 'regular'
      });
    }

    if (this.defender.hp === 0) {
      this.gameEnded = true;
      return true;
    }

    const tmp = this.attacker;
    this.attacker = this.defender;
    this.defender = tmp;
    return false;
  }
}
