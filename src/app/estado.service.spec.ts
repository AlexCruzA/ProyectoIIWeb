import { TestBed, inject } from '@angular/core/testing';

import { EstadosService } from './estado.service';

describe('EstadosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstadosService]
    });
  });

  it('should be created', inject([EstadosService], (service: EstadosService) => {
    expect(service).toBeTruthy();
  }));
});
