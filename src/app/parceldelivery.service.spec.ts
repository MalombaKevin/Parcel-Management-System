import { TestBed } from '@angular/core/testing';

import { ParceldeliveryService } from './parceldelivery.service';

describe('ParceldeliveryService', () => {
  let service: ParceldeliveryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParceldeliveryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
