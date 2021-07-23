import {TestBed} from '@angular/core/testing';

import {BattleLoggerService} from './battle-logger.service';

describe('BattleLoggerService', () => {
    let service: BattleLoggerService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(BattleLoggerService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
