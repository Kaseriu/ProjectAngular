import {Injectable} from '@angular/core';
import {Pokemon} from '../../../models/pokemon';
import {BattleLoggerService} from '../battle-logger/battle-logger.service';
import {pokemonProvider} from '../../../providers/pokemon.provider';
import {RoutingService} from '../routing/routing.service';

@Injectable({
    providedIn: 'root'
})
export class BattleStateService {

    gamePaused = true;
    gameEnded = false;

    attacker: Pokemon = undefined;
    defender: Pokemon = undefined;

    firstPokemon: Pokemon;
    secondPokemon: Pokemon;

    constructor(
        private battleLoggerService: BattleLoggerService,
        private routingService: RoutingService
    ) {
    }

    setPokemons(pokemon1: string, pokemon2: string): void {
        pokemonProvider(pokemon1).subscribe(value => {
            if (value === null) {
                this.routingService.goToPokemonSelection().then();
                return;
            }
            this.firstPokemon = value;
        });
        pokemonProvider(pokemon2).subscribe(value => {
            if (value === null) {
                this.routingService.goToPokemonSelection().then();
                return;
            }
            this.secondPokemon = value;
        });
    }

    rematch(): void {
        window.location.reload();
    }

    fight(): boolean {
        if (this.attacker === undefined && this.defender === undefined) {
            const firstToAtk = this.firstPokemon.attackOrder(this.secondPokemon);
            if (firstToAtk) {
                this.attacker = this.firstPokemon;
                this.defender = this.secondPokemon;
            } else {
                this.attacker = this.secondPokemon;
                this.defender = this.firstPokemon;
            }
        }

        this.battleLoggerService.log(this.attacker.attack(this.defender, Math.floor(Math.random() * this.attacker.moveList.length)));
        if (this.defender.hp > 0) {
            this.battleLoggerService.log({
                text: this.defender.name + ' hp : ' + this.defender.hp + '\n',
                cssClass: 'regular'
            });
        }

        if (this.defender.hp === 0) {
            this.gameEnded = true;
            return true;
        }

        const tmp = this.attacker;
        this.attacker = this.defender;
        this.defender = tmp;
        return false;
    }
}
