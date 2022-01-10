/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DepensesService } from './Depenses.service';

describe('Service: Depenses', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DepensesService]
    });
  });

  it('should ...', inject([DepensesService], (service: DepensesService) => {
    expect(service).toBeTruthy();
  }));
});
