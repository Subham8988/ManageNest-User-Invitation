import { TestBed } from '@angular/core/testing';

import { InviationService } from './inviation.service';

describe('InviationService', () => {
  let service: InviationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InviationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
