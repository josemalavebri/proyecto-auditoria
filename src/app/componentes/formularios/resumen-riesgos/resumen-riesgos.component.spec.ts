import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenRiesgosComponent } from './resumen-riesgos.component';

describe('ResumenRiesgosComponent', () => {
  let component: ResumenRiesgosComponent;
  let fixture: ComponentFixture<ResumenRiesgosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumenRiesgosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumenRiesgosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
