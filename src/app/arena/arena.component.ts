import {Component, OnInit} from '@angular/core';
import {BattleStateService} from '../services/battle-state/battle-state.service';
import {Pokemon} from '../../models/pokemon';
import {BattleLoggerService} from '../services/battle-logger/battle-logger.service';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.css']
})
export class ArenaComponent implements OnInit {

  constructor(public battleStateService: BattleStateService, public battleLoggerService: BattleLoggerService) {
  }

  ngOnInit(): void {
    this.fight().then(r => '');
  }

  async fight(): Promise<Pokemon> {
    let attacker: Pokemon;
    let defender: Pokemon;
    const firstToAtk = this.battleStateService.firstPokemon.attackOrder(this.battleStateService.secondPokemon);
    if (firstToAtk) {
      attacker = this.battleStateService.firstPokemon;
      defender = this.battleStateService.secondPokemon;
    } else {
      attacker = this.battleStateService.secondPokemon;
      defender = this.battleStateService.firstPokemon;
    }
    while (attacker.hp !== 0 && defender.hp !== 0) {
      this.battleLoggerService.log(attacker.attack(defender, Math.floor(Math.random() * attacker.moveList.length)));
      if (defender.hp > 0) {
        this.battleLoggerService.log(defender.name + ' hp : ' + defender.hp + '\n');
      }
      const tmp = attacker;
      attacker = defender;
      defender = tmp;
      await attacker.delay(1000);
    }

    if (defender.hp === 0) {
      return attacker;
    } else {
      return defender;
    }
  }

}
