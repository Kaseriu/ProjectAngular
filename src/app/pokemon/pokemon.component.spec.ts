import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PokemonComponent} from './pokemon.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('PokemonComponent', () => {
    let component: PokemonComponent;
    let fixture: ComponentFixture<PokemonComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PokemonComponent],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PokemonComponent);
        compiled = fixture.nativeElement;
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render pokemon name', () => {
        const name = compiled.querySelector('.name').textContent;
        expect(name).toBe('PIKACHU');
    });

    it('should render pokemon hp', () => {
        const name = compiled.querySelector('.hp').textContent;
        expect(name).toBe('100.0');
    });
});
