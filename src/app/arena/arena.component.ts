import {Component} from '@angular/core';
import {BattleStateService} from '../services/battle-state/battle-state.service';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.css']
})
export class ArenaComponent {

  constructor(public battleStateService: BattleStateService) {
  }

  handleClick(): void {
    if (this.battleStateService.gamePaused) {
      this.battleStateService.gamePaused = false;
      this.battleStateService.fight().then(a => {
      });
    } else {
      this.battleStateService.gamePaused = true;
      clearInterval(this.battleStateService.battleIntervalId);
      this.battleStateService.battleIntervalId = null;
    }
  }
}
