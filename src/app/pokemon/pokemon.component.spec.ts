import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PokemonComponent} from './pokemon.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('PokemonComponent', () => {
    let component: PokemonComponent;
    let fixture: ComponentFixture<PokemonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PokemonComponent],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PokemonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
