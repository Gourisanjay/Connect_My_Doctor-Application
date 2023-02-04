import { TestBed } from '@angular/core/testing';

import { AdminDashboardDistributorService } from './admin-dashboard-distributor.service';

describe('AdminDashboardDistributorService', () => {
  let service: AdminDashboardDistributorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminDashboardDistributorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
