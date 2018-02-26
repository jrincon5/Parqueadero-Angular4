import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { IngresarVehiculoComponent } from './ingresar-vehiculo/ingresar-vehiculo.component';
import { SacarVehiculoComponent } from './sacar-vehiculo/sacar-vehiculo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [IngresarVehiculoComponent, SacarVehiculoComponent]
})
export class DashboardModule { }
