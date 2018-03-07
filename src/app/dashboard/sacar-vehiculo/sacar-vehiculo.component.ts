import { Component, OnInit } from '@angular/core';
import { VigilanteService } from '../vigilante.service';
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
  errores: any;

  constructor( private vigilanteService: VigilanteService,
              private appComponent: AppComponent) { }

  ngOnInit() {
    this.removeForm = new FormGroup({
      placa: new FormControl('', [Validators.required,
        Validators.minLength(6),Validators.maxLength(6)])
    });
  }

  onSubmit(){
    if(this.removeForm.valid){
      let placa = this.removeForm.controls['placa'].value;
      this.vigilanteService.sacarVehiculo(placa)
      .subscribe( response => {
        this.comprobante = response.json();
        alert('Vehículo removido');
        this.appComponent.getAllComprobantes();
      },(error: Response) => {
        this.errores = error.json();
        alert(this.errores.message);
      });
    }
    this.removeForm.reset();
  }
}