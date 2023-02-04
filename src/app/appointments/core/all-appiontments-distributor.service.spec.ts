import { TestBed } from '@angular/core/testing';

import { AllAppiontmentsDistributorService } from './all-appiontments-distributor.service';

describe('AllAppiontmentsDistributorService', () => {
  let service: AllAppiontmentsDistributorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllAppiontmentsDistributorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
