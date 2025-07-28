import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultadRegistroComponent } from './facultad-registro.component';

describe('FacultadRegistroComponent', () => {
  let component: FacultadRegistroComponent;
  let fixture: ComponentFixture<FacultadRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacultadRegistroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultadRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
