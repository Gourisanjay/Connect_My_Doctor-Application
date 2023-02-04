import { TestBed } from '@angular/core/testing';

import { AddDistributorService } from './add-distributor.service';

describe('AddDistributorService', () => {
  let service: AddDistributorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddDistributorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
