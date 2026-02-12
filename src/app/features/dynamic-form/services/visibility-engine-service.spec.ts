import { TestBed } from '@angular/core/testing';

import { VisibilityEngineService } from './visibility-engine-service';

describe('Visibility', () => {
  let service: VisibilityEngineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisibilityEngineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
