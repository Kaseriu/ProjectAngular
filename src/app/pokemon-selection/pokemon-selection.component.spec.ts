import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PokemonSelectionComponent} from './pokemon-selection.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';

describe('PokemonSelectionComponent', () => {
    let component: PokemonSelectionComponent;
    let fixture: ComponentFixture<PokemonSelectionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FormsModule, RouterTestingModule],
            declarations: [PokemonSelectionComponent],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PokemonSelectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
