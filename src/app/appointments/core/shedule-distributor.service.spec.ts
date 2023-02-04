import { TestBed } from '@angular/core/testing';

import { SheduleDistributorService } from './shedule-distributor.service';

describe('SheduleDistributorService', () => {
  let service: SheduleDistributorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SheduleDistributorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
