import { TestBed } from '@angular/core/testing';

import { DbComparisonService } from './db-comparison.service';

describe('DbComparisonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbComparisonService = TestBed.get(DbComparisonService);
    expect(service).toBeTruthy();
  });
});
