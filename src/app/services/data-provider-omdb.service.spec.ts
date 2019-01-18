import { TestBed } from '@angular/core/testing';

import { DataProviderOMDbService } from './data-provider-omdb.service';

describe('DataProviderOMDbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataProviderOMDbService = TestBed.get(DataProviderOMDbService);
    expect(service).toBeTruthy();
  });
});
