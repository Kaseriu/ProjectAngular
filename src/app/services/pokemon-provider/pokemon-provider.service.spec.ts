import { TestBed } from '@angular/core/testing';

import { PokemonProviderService } from './pokemon-provider.service';

describe('PokemonProviderService', () => {
  let service: PokemonProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
