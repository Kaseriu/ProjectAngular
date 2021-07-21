import {Component, OnInit} from '@angular/core';
import {RoutingService} from '../services/routing/routing.service';

@Component({
    selector: 'app-battle-view',
    templateUrl: './battle-view.component.html',
    styleUrls: ['./battle-view.component.css']
})
export class BattleViewComponent implements OnInit {

    constructor(public routingService: RoutingService) {
    }

    ngOnInit(): void {
    }

}
