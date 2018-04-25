import { TestBed, inject } from '@angular/core/testing';

import { MenssageService } from './menssage.service';

describe('MenssageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenssageService]
    });
  });

  it('should be created', inject([MenssageService], (service: MenssageService) => {
    expect(service).toBeTruthy();
  }));
});
