import {Component, OnInit} from '@angular/core';
import {BattleStateService} from '../services/battle-state/battle-state.service';
import {interval, Observable, Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-arena',
    templateUrl: './arena.component.html',
    styleUrls: ['./arena.component.css']
})
export class ArenaComponent implements OnInit {

    startDate: number = null;
    battlePipe: Observable<number>;
    battleSubscription: Subscription;

    constructor(
        public battleStateService: BattleStateService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        const pokemon1 = this.route.snapshot.queryParams.pokemon1;
        const pokemon2 = this.route.snapshot.queryParams.pokemon2;
        this.battleStateService.setPokemons(pokemon1, pokemon2);
    }

    handleClick(): void {
        this.displayDate();
        this.battlePipe = interval(1000);

        if (this.battleStateService.gamePaused) {
            this.battleStateService.gamePaused = false;
            this.battleSubscription = this.battlePipe.subscribe(() => {
                const ended = this.battleStateService.fight();
                if (ended) {
                    this.battleSubscription.unsubscribe();
                }
            });
        } else {
            this.battleStateService.gamePaused = true;
            this.battleSubscription.unsubscribe();
            this.battleSubscription = null;
            this.battlePipe = null;
        }
    }

    displayDate(): void {
        if (this.startDate === null) {
            this.startDate = Date.now();
        }
    }
}
