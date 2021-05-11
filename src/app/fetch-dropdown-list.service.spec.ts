import { TestBed } from '@angular/core/testing';

import { FetchDropdownListService } from './fetch-dropdown-list.service';

describe('FetchDropdownListService', () => {
  let service: FetchDropdownListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchDropdownListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
