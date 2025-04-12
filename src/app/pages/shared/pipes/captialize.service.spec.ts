import { TestBed } from '@angular/core/testing';

import { CaptializeService } from './captialize.service';

describe('CaptializeService', () => {
  let service: CaptializeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaptializeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
