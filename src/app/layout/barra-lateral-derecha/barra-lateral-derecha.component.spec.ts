import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraLateralDerechaComponent } from './barra-lateral-derecha.component';

describe('BarraLateralDerechaComponent', () => {
  let component: BarraLateralDerechaComponent;
  let fixture: ComponentFixture<BarraLateralDerechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraLateralDerechaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarraLateralDerechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
