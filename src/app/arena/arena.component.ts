import {Component} from '@angular/core';
import {BattleStateService} from '../services/battle-state/battle-state.service';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.css']
})
export class ArenaComponent {

  startDate: number = null;

  constructor(public battleStateService: BattleStateService) {
  }

  handleClick(): void {
    this.displayDate();

    if (this.battleStateService.gamePaused) {
      this.battleStateService.gamePaused = false;
      this.battleStateService.fight().then(() => {
      });
    } else {
      this.battleStateService.gamePaused = true;
      clearInterval(this.battleStateService.battleIntervalId);
      this.battleStateService.battleIntervalId = null;
    }
  }

  displayDate(): void {
    if (this.startDate === null) {
      this.startDate = Date.now();
    }
  }
}
