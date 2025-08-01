import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPreguntasV3 } from './formulario-preguntas-v3';

describe('FormularioPreguntasV3', () => {
  let component: FormularioPreguntasV3;
  let fixture: ComponentFixture<FormularioPreguntasV3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioPreguntasV3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioPreguntasV3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
