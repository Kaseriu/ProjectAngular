import {Component} from '@angular/core';
import {BattleStateService} from '../services/battle-state/battle-state.service';
import {Pokemon} from '../../models/pokemon';
import {BattleLoggerService} from '../services/battle-logger/battle-logger.service';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.css']
})
export class ArenaComponent {

  gamePaused = true;
  gameEnded = false;

  attacker: Pokemon = undefined;
  defender: Pokemon = undefined;

  battleIntervalId: number = null;

  constructor(public battleStateService: BattleStateService, public battleLoggerService: BattleLoggerService) {
  }

  handleClick(): void {
    if (this.gamePaused) {
      this.gamePaused = false;
      this.fight().then(a => {
      });
    } else {
      this.gamePaused = true;
      clearInterval(this.battleIntervalId);
      this.battleIntervalId = null;
    }
  }

  async fight(): Promise<void> {
    if (this.attacker === undefined && this.defender === undefined) {
      const firstToAtk = this.battleStateService.firstPokemon.attackOrder(this.battleStateService.secondPokemon);
      if (firstToAtk) {
        this.attacker = this.battleStateService.firstPokemon;
        this.defender = this.battleStateService.secondPokemon;
      } else {
        this.attacker = this.battleStateService.secondPokemon;
        this.defender = this.battleStateService.firstPokemon;
      }
    }

    return new Promise<void>((resolve) => {
      this.battleIntervalId = setInterval(() => {
        this.battleLoggerService.log(this.attacker.attack(this.defender, Math.floor(Math.random() * this.attacker.moveList.length)));
        if (this.defender.hp > 0) {
          this.battleLoggerService.log(this.defender.name + ' hp : ' + this.defender.hp + '\n');
        }

        if (this.defender.hp === 0) {
          clearInterval(this.battleIntervalId);
          this.battleIntervalId = null;
          this.gameEnded = true;
          return resolve();
        }

        const tmp = this.attacker;
        this.attacker = this.defender;
        this.defender = tmp;
      }, 1000);
    });
  }
}
