/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DonsService } from './Dons.service';

describe('Service: Dons', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DonsService]
    });
  });

  it('should ...', inject([DonsService], (service: DonsService) => {
    expect(service).toBeTruthy();
  }));
});
