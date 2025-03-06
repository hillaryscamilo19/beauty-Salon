/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServiceServiceService } from './ServiceService.service';

describe('Service: ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceServiceService]
    });
  });

  it('should ...', inject([ServiceServiceService], (service: ServiceServiceService) => {
    expect(service).toBeTruthy();
  }));
});
