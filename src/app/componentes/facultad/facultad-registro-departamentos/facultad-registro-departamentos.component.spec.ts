import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultadRegistroDepartamentosComponent } from './facultad-registro-departamentos.component';

describe('FacultadRegistroDepartamentosComponent', () => {
  let component: FacultadRegistroDepartamentosComponent;
  let fixture: ComponentFixture<FacultadRegistroDepartamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacultadRegistroDepartamentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultadRegistroDepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
