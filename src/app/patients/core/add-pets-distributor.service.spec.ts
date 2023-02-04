import { TestBed } from '@angular/core/testing';

import { AddPetsDistributorService } from './add-pets-distributor.service';

describe('AddPetsDistributorService', () => {
  let service: AddPetsDistributorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddPetsDistributorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
