import { TestBed, inject } from '@angular/core/testing';

import { FirehoseService } from './firehose.service';

describe('FirehoseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirehoseService]
    });
  });

  it('should be created', inject([FirehoseService], (service: FirehoseService) => {
    expect(service).toBeTruthy();
  }));
});
