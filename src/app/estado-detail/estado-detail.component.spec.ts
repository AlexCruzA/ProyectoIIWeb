import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoDetailComponent } from './estado-detail.component';

describe('EstadoDetailComponent', () => {
  let component: EstadoDetailComponent;
  let fixture: ComponentFixture<EstadoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
