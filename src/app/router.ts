import {Routes} from '@angular/router';
import {PokemonSelectionComponent} from './pokemon-selection/pokemon-selection.component';
import {BattleViewComponent} from './battle-view/battle-view.component';

export const routes: Routes = [
    {path: 'battle', component: BattleViewComponent},
    {path: '', component: PokemonSelectionComponent},
    {path: '**', redirectTo: ''},
];
