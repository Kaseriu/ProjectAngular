import {Component, OnInit} from '@angular/core';
import {RoutingService} from '../services/routing/routing.service';

@Component({
    selector: 'app-pokemon-selection',
    templateUrl: './pokemon-selection.component.html',
    styleUrls: ['./pokemon-selection.component.css']
})
export class PokemonSelectionComponent implements OnInit {
    pokemon1: string;
    pokemon2: string;

    constructor(public routingService: RoutingService) {
    }

    ngOnInit(): void {
    }

}
