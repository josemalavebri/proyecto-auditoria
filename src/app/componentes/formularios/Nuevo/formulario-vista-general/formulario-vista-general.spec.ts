import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioVistaGeneral } from './formulario-vista-general';

describe('FormularioVistaGeneral', () => {
  let component: FormularioVistaGeneral;
  let fixture: ComponentFixture<FormularioVistaGeneral>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioVistaGeneral]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioVistaGeneral);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
