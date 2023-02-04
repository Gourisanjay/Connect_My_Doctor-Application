import { TestBed } from '@angular/core/testing';

import { AddVetDistributorService } from './add-vet-distributor.service';

describe('AddVetDistributorService', () => {
  let service: AddVetDistributorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddVetDistributorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
