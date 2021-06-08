import {IMove} from 'pokeapi-typescript';
import {moveMapper} from './move.mapper';
import {MoveProps} from '../models/pokemon';

export const moveListMapper = (moves: IMove[]): MoveProps[] => {
  return moves.map(move => moveMapper(move));
};
