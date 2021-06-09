import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ArenaComponent} from './arena/arena.component';
import {PokemonComponent} from './pokemon/pokemon.component';
import {BattleLogComponent} from './battle-log/battle-log.component';
import {BattleLoggerService} from './services/battle-logger/battle-logger.service';

@NgModule({
  declarations: [
    AppComponent,
    ArenaComponent,
    PokemonComponent,
    BattleLogComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [BattleLoggerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
