import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { IngresarVehiculoComponent } from './ingresar-vehiculo/ingresar-vehiculo.component';
import { SacarVehiculoComponent } from './sacar-vehiculo/sacar-vehiculo.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [IngresarVehiculoComponent, SacarVehiculoComponent]
})
export class DashboardModule { }
