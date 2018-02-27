import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VigilanteService } from '../vigilante.service';
import { AppComponent } from '../../app.component';
import { DISABLED } from '@angular/forms/src/model';

@Component({
  selector: 'app-ingresar-vehiculo',
  templateUrl: './ingresar-vehiculo.component.html',
  styleUrls: ['./ingresar-vehiculo.component.css'],
  providers: [VigilanteService]
})
export class IngresarVehiculoComponent implements OnInit, OnDestroy {

  vehiculoForm: FormGroup;
  tipoVehiculo: String;
  disable: boolean = true;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private vigilanteService: VigilanteService,
              private appComponent: AppComponent) { }

  ngOnInit() {
    this.vehiculoForm = new FormGroup({
      placa: new FormControl('', Validators.required),
      gridRadios: new FormControl('',Validators.required),
      cilindraje: new FormControl({value: ''})
    });
  }

  ngOnDestroy(): void {
  }

  onSubmit(){
    if(this.vehiculoForm.valid){
      if(this.tipoVehiculo=='Carro'){
        let car = { 'placa': this.vehiculoForm.controls['placa'].value };
        this.vigilanteService.saveCar(car).subscribe();
      }
      if(this.tipoVehiculo=='Moto'){
        let moto = { 'placa': this.vehiculoForm.controls['placa'].value,
                      'cilindraje':  this.vehiculoForm.controls['cilindraje'].value };
        this.vigilanteService.saveMoto(moto).subscribe();
      }
    }
    alert('Vehículo agregado');
    this.appComponent.getAllComprobantes();
    this.vehiculoForm.reset();
  }

  checkclic(val){
    console.log(val);
    this.tipoVehiculo=val;
  }
}
