import {IMove} from 'pokeapi-typescript';
import {MoveProps} from '../models/pokemon';

export const moveMapper = (move: IMove): MoveProps => {
  return Object.freeze({
    name: move.name,
    power: move.power
  });
};
