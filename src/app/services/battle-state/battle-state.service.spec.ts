import {TestBed} from '@angular/core/testing';

import {BattleStateService} from './battle-state.service';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('BattleStateService', () => {
    let service: BattleStateService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, HttpClientTestingModule]
        });
        service = TestBed.inject(BattleStateService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
