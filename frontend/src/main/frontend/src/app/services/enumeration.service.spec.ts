import { TestBed } from '@angular/core/testing';

import { EnumerationService } from './enumeration.service';

describe('EnumerationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnumerationService = TestBed.get(EnumerationService);
    expect(service).toBeTruthy();
  });
});
