import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Graphe2Component } from './graphe2.component';

describe('Graphe2Component', () => {
  let component: Graphe2Component;
  let fixture: ComponentFixture<Graphe2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Graphe2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Graphe2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
