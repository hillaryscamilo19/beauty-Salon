/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SalonService } from './Salon.service';

describe('Service: Salon', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalonService]
    });
  });

  it('should ...', inject([SalonService], (service: SalonService) => {
    expect(service).toBeTruthy();
  }));
});
