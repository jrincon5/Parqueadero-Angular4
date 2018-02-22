import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { IngresarVehiculoComponent } from './dashboard/ingresar-vehiculo/ingresar-vehiculo.component';
import { SacarVehiculoComponent } from './dashboard/sacar-vehiculo/sacar-vehiculo.component';

const routes: Routes = [
  {path: '', component: IngresarVehiculoComponent},
  {path: 'ingresar', component: IngresarVehiculoComponent},
  {path: 'sacar', component: SacarVehiculoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
