import { TestBed } from '@angular/core/testing';

import { RouteplaningService } from './routeplaning.service';

describe('RouteplaningService', () => {
  let service: RouteplaningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteplaningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
