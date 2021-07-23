import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from '../../models/pokemon';

@Component({
    selector: 'app-pokemon',
    templateUrl: './pokemon.component.html',
    styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

    @Input() pokemon: Pokemon = new Pokemon({
        sprite: 'sprite',
        hp: 100,
        attackPower: 100,
        name: 'Pikachu',
        speed: 100,
        moveList: []
    });

    constructor() {
    }

    ngOnInit(): void {
    }
}
