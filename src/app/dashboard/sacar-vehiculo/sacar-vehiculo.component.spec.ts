import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SacarVehiculoComponent } from './sacar-vehiculo.component';

describe('SacarVehiculoComponent', () => {
  let component: SacarVehiculoComponent;
  let fixture: ComponentFixture<SacarVehiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SacarVehiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SacarVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
