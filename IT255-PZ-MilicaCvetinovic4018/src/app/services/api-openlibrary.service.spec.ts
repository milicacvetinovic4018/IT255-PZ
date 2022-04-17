import { TestBed } from '@angular/core/testing';

import { ApiOpenlibraryService } from './api-openlibrary.service';

describe('ApiOpenlibraryService', () => {
  let service: ApiOpenlibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiOpenlibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
