import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomularioSiguienteEncuesta } from './fomulario-siguiente-encuesta';

describe('FomularioSiguienteEncuesta', () => {
  let component: FomularioSiguienteEncuesta;
  let fixture: ComponentFixture<FomularioSiguienteEncuesta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FomularioSiguienteEncuesta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FomularioSiguienteEncuesta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
