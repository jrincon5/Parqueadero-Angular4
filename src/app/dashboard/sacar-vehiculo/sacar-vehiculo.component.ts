import { Component, OnInit } from '@angular/core';
import { VigilanteService } from '../vigilante.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-sacar-vehiculo',
  templateUrl: './sacar-vehiculo.component.html',
  styleUrls: ['./sacar-vehiculo.component.css'],
  providers: [VigilanteService]
})
export class SacarVehiculoComponent implements OnInit {

  comprobante: any[];
  removeForm: FormGroup;

  constructor( private vigilanteService: VigilanteService,
              private appComponent: AppComponent) { }

  ngOnInit() {
    this.removeForm = new FormGroup({
      placa: new FormControl('', Validators.required)
    });
  }

  getComprobante(placa) {
    this.vigilanteService.findComprobante(placa)
    .subscribe(response => {
      this.comprobante  = response.json();
      debugger;
      console.log('holi: ' + JSON.stringify(this.comprobante));
    });
  }

  onSubmit(){
    if(this.removeForm.valid){
      let placa = this.removeForm.controls['placa'].value;
      this.vigilanteService.sacarVehiculo(placa).subscribe();
      this.getComprobante(placa);
    }
    alert('Vehículo removido');
    this.removeForm.reset();
    this.appComponent.getAllComprobantes();
  }
}