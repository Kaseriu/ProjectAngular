import {Component, OnInit} from '@angular/core';
import {BattleLoggerService} from '../services/battle-logger/battle-logger.service';

@Component({
    selector: 'app-battle-log',
    templateUrl: './battle-log.component.html',
    styleUrls: ['./battle-log.component.css']
})
export class BattleLogComponent implements OnInit {

    constructor(public battleLogger: BattleLoggerService) {
    }

    ngOnInit(): void {
    }

}
