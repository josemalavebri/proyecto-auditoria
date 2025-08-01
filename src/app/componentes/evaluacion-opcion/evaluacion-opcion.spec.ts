import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionOpcion } from './evaluacion-opcion';

describe('EvaluacionOpcion', () => {
  let component: EvaluacionOpcion;
  let fixture: ComponentFixture<EvaluacionOpcion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvaluacionOpcion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluacionOpcion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
