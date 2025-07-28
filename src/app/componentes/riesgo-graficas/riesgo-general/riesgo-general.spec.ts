import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiesgoGeneral } from './riesgo-general';

describe('RiesgoGeneral', () => {
  let component: RiesgoGeneral;
  let fixture: ComponentFixture<RiesgoGeneral>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiesgoGeneral]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiesgoGeneral);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
