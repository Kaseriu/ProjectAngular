import {TestBed} from '@angular/core/testing';

import {PokemonProviderService} from './pokemon-provider.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('PokemonProviderService', () => {
    let service: PokemonProviderService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });
        service = TestBed.inject(PokemonProviderService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
