import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BattleLoggerService {

  logs: string[] = [];
  constructor() { }

  log(str: string): void {
    this.logs.push(str);
  }
}
