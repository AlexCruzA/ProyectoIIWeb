import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosReporteComponent } from './proyectos-reporte.component';

describe('ProyectosReporteComponent', () => {
  let component: ProyectosReporteComponent;
  let fixture: ComponentFixture<ProyectosReporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectosReporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
