import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ArenaComponent} from './arena.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ArenaComponent', () => {
    let component: ArenaComponent;
    let fixture: ComponentFixture<ArenaComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule, HttpClientTestingModule],
            declarations: [ArenaComponent],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ArenaComponent);
        compiled = fixture.nativeElement;
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display date when fight starts', () => {
        component.handleClick();
        expect(component.startDate).not.toBe(null);
    });
});
