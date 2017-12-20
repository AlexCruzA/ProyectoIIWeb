import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosReporteComponent } from './estados-reporte.component';

describe('EstadosReporteComponent', () => {
  let component: EstadosReporteComponent;
  let fixture: ComponentFixture<EstadosReporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadosReporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadosReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
