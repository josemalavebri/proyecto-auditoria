import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPreguntasV2 } from './formulario-preguntas-v2';

describe('FormularioPreguntasV2', () => {
  let component: FormularioPreguntasV2;
  let fixture: ComponentFixture<FormularioPreguntasV2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioPreguntasV2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioPreguntasV2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
