import { TestBed, inject } from '@angular/core/testing';

import { EditappdetailService } from './editappdetail.service';

describe('EditappdetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditappdetailService]
    });
  });

  it('should be created', inject([EditappdetailService], (service: EditappdetailService) => {
    expect(service).toBeTruthy();
  }));
});
