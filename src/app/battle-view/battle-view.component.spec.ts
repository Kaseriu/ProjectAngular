import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BattleViewComponent} from './battle-view.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';

describe('BattleViewComponent', () => {
    let component: BattleViewComponent;
    let fixture: ComponentFixture<BattleViewComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [BattleViewComponent],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BattleViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
