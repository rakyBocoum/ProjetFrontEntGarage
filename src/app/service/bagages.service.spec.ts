import { TestBed } from '@angular/core/testing';

import { BagagesService } from './bagages.service';

describe('BagagesService', () => {
  let service: BagagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BagagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
