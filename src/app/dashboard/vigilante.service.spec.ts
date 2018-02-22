import { TestBed, inject } from '@angular/core/testing';

import { VigilanteService } from './vigilante.service';

describe('VigilanteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VigilanteService]
    });
  });

  it('should be created', inject([VigilanteService], (service: VigilanteService) => {
    expect(service).toBeTruthy();
  }));
});
