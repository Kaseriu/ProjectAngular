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
}

export class Pokemon implements PokemonProps {

  readonly name: string;
  hp: number;
  readonly attackPower: number;
  readonly speed: number;
  readonly moveList: MoveProps[];

  constructor(props: PokemonProps) {
    this.name = props.name;
    this.hp = props.hp;
    this.attackPower = props.attackPower;
    this.speed = props.speed;
    this.moveList = props.moveList;
  }

  attackOrder(pokemon: Pokemon): boolean {
    return this.speed >= pokemon.speed;
  }

  attack(pokemon: Pokemon, ability: number): string {
    if (pokemon.hp <= 0) {
      return pokemon.name + ' est KO';
    } else {
      pokemon.hp -= Math.floor(this.attackPower * this.moveList[ability].power);
      if (pokemon.hp < 0) {
        // console.log(this.name + ' attaque ' + this.moveList[ability].name);
        pokemon.hp = 0;
        return pokemon.name + ' est KO\n';
      }
      return this.name + ' attaque ' + this.moveList[ability].name;
    }
  }
}
