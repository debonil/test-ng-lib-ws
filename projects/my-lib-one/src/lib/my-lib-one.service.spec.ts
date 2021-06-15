import { TestBed } from '@angular/core/testing';

import { MyLibOneService } from './my-lib-one.service';

describe('MyLibOneService', () => {
  let service: MyLibOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyLibOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
