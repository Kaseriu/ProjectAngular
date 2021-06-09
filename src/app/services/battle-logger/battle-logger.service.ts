import { Injectable } from '@angular/core';

export interface LogEntry {
  text: string;
  cssClass: string;
}

@Injectable({
  providedIn: 'root'
})
export class BattleLoggerService {

  logs: LogEntry[] = [];
  constructor() { }

  log(logEntry: LogEntry): void {
    this.logs.push(logEntry);
  }
}
