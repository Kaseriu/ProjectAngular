import {Component, OnInit} from '@angular/core';
import {RoutingService} from '../services/routing/routing.service';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-pokemon-selection',
    templateUrl: './pokemon-selection.component.html',
    styleUrls: ['./pokemon-selection.component.css']
})
export class PokemonSelectionComponent implements OnInit {
    constructor(public routingService: RoutingService) {
    }

    ngOnInit(): void {
    }

    async onSubmit(f: NgForm): Promise<void> {
        const {pokemon1, pokemon2} = f.value;
        if (!!pokemon1 && !!pokemon2) {
            await this.routingService.goToBattle(pokemon1, pokemon2);
        }
    }
}
