/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StylistService } from './Stylist.service';

describe('Service: Stylist', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StylistService]
    });
  });

  it('should ...', inject([StylistService], (service: StylistService) => {
    expect(service).toBeTruthy();
  }));
});
