import {LogEntry} from '../app/services/battle-logger/battle-logger.service';

export interface MoveProps {
    readonly name: string;
    readonly power: number;
}

export interface PokemonProps {
    name: string;
    hp: number;
    attackPower: number;
    speed: number;
    moveList: MoveProps[];
    sprite: string;
}

export class Pokemon implements PokemonProps {

    readonly name: string;
    hp: number;
    readonly attackPower: number;
    readonly speed: number;
    readonly moveList: MoveProps[];
    readonly sprite: string;

    constructor(props: PokemonProps) {
        this.name = props.name;
        this.hp = props.hp;
        this.attackPower = props.attackPower;
        this.speed = props.speed;
        this.moveList = props.moveList;
        this.sprite = props.sprite;
    }

    attackOrder(pokemon: Pokemon): boolean {
        return this.speed >= pokemon.speed;
    }

    attack(pokemon: Pokemon, ability: number): LogEntry {
        pokemon.hp -= Math.floor(this.attackPower * this.moveList[ability].power);
        if (pokemon.hp < 0) {
            pokemon.hp = 0;
            return {
                text: pokemon.name + ' est KO',
                cssClass: 'end'
            };
        }
        return {
            text: this.name + ' attaque ' + this.moveList[ability].name,
            cssClass: 'regular'
        };
    }
}
