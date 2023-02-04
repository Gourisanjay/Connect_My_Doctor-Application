import { TestBed } from '@angular/core/testing';

import { PaymentapiService } from './paymentapi.service';

describe('PaymentapiService', () => {
  let service: PaymentapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
