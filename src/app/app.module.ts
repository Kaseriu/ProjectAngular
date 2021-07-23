import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ArenaComponent} from './arena/arena.component';
import {PokemonComponent} from './pokemon/pokemon.component';
import {BattleLogComponent} from './battle-log/battle-log.component';
import {BattleLoggerService} from './services/battle-logger/battle-logger.service';
import {PokemonSelectionComponent} from './pokemon-selection/pokemon-selection.component';
import {routes} from './router';
import {RouterModule} from '@angular/router';
import {BattleViewComponent} from './battle-view/battle-view.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        ArenaComponent,
        PokemonComponent,
        BattleLogComponent,
        PokemonSelectionComponent,
        BattleViewComponent,
    ],
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatFormFieldModule,
        HttpClientModule
    ],
    providers: [BattleLoggerService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
