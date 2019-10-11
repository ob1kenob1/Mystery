import { TestBed } from '@angular/core/testing';

import { LoaclStorageService } from './loacl-storage.service';

describe('LoaclStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoaclStorageService = TestBed.get(LoaclStorageService);
    expect(service).toBeTruthy();
  });
});
