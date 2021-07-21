import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class RoutingService {
    constructor(private router: Router) {
    }

    async goToBattle(pokemon1: string, pokemon2: string): Promise<void> {
        await this.router.navigate([`battle`], {
            queryParams: {
                pokemon1,
                pokemon2
            }
        });
    }

    async goToPokemonSelection(): Promise<void> {
        await this.router.navigate([``]);
    }
}
