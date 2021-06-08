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
    if (this.speed >= pokemon.speed) {
      // console.log(this.name + ' attaque en premier\n');
      return true;
    } else {
      // console.log(pokemon.name + ' attaque en premier\n');
      return false;
    }
  }

  attack(pokemon: Pokemon, ability: number): string {
    if (pokemon.hp <= 0) {
      return pokemon.name + ' est KO';
    } else {
      pokemon.hp -= this.attackPower * this.moveList[ability].power;
      if (pokemon.hp < 0) {
        // console.log(this.name + ' attaque ' + this.moveList[ability].name);
        pokemon.hp = 0;
        return pokemon.name + ' est KO\n';
      }
      return this.name + ' attaque ' + this.moveList[ability].name;
    }
  }

  // async fight(defPokemon: Pokemon): Promise<Pokemon> {
  //   let firstToAtk = this.attackOrder(defPokemon);
  //   while (this.hp !== 0 && defPokemon.hp !== 0) {
  //     if (firstToAtk) {
  //       console.log(this.attack(defPokemon, Math.floor(Math.random() * this.moveList.length)));
  //       if (defPokemon.hp > 0) {
  //         console.log(defPokemon.name + ' hp : ' + defPokemon.hp + '\n');
  //       }
  //       firstToAtk = false;
  //     } else {
  //       console.log(defPokemon.attack(this, Math.floor(Math.random() * defPokemon.moveList.length)));
  //       if (this.hp > 0) {
  //         console.log(this.name + ' hp : ' + this.hp + '\n');
  //       }
  //       firstToAtk = true;
  //     }
  //     await this.delay(1000);
  //   }
  //
  //   if (defPokemon.hp === 0) {
  //     return this;
  //   } else {
  //     return defPokemon;
  //   }
  // }

  delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
