import { TestBed, inject } from '@angular/core/testing';

import { SocialserviceService } from './socialservice.service';

describe('SocialserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocialserviceService]
    });
  });

  it('should be created', inject([SocialserviceService], (service: SocialserviceService) => {
    expect(service).toBeTruthy();
  }));
});
