import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntasFormularioComponent } from './preguntas-formulario.component';

describe('PreguntasFormularioComponent', () => {
  let component: PreguntasFormularioComponent;
  let fixture: ComponentFixture<PreguntasFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreguntasFormularioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreguntasFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
