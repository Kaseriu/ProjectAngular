import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BattleLogComponent} from './battle-log.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('BattleLogComponent', () => {
    let component: BattleLogComponent;
    let fixture: ComponentFixture<BattleLogComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BattleLogComponent],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BattleLogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
