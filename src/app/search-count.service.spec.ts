import { TestBed } from '@angular/core/testing';

import { SearchCountService } from './search-count.service';

describe('SearchCountService', () => {
  let service: SearchCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
