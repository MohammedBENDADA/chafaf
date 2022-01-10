/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CreatComponent } from './creat.component';

describe('CreatComponent', () => {
  let component: CreatComponent;
  let fixture: ComponentFixture<CreatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
