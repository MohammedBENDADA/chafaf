/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DonsComponent } from './dons.component';

describe('DonsComponent', () => {
  let component: DonsComponent;
  let fixture: ComponentFixture<DonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
