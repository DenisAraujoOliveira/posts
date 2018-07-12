import { TestBed, inject } from '@angular/core/testing';

import { TypeUserService } from './type-user.service';

describe('TypeUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypeUserService]
    });
  });

  it('should be created', inject([TypeUserService], (service: TypeUserService) => {
    expect(service).toBeTruthy();
  }));
});
