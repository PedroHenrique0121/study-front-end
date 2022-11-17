import { TestBed } from '@angular/core/testing';

import { PenasService } from './penas.service';

describe('PenasService', () => {
  let service: PenasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PenasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
