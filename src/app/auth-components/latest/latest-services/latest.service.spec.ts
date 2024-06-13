import { TestBed } from '@angular/core/testing';

import { LatestService } from './latest.service';

describe('LatestService', () => {
  let service: LatestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LatestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
