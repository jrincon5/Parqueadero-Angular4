import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { VigilanteService } from '../vigilante.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-ingresar-vehiculo',
  templateUrl: './ingresar-vehiculo.component.html',
  styleUrls: ['./ingresar-vehiculo.component.css'],
  providers: [VigilanteService]
})
export class IngresarVehiculoComponent implements OnInit, OnDestroy {

  vehiculoForm: FormGroup;
  tipoVehiculo: String;
  disable: boolean;
  errores: any;
  radioCheck: any;

  constructor(private vigilanteService: VigilanteService,
              private appComponent: AppComponent) { }

  ngOnInit() {
    this.vehiculoForm = new FormGroup({
      placa: new FormControl('',[Validators.required,
      Validators.minLength(6),Validators.maxLength(6)]),
      gridRadios: new FormControl('',Validators.required),
      cilindraje: new FormControl({value: ''})
    });
  }

  ngOnDestroy(): void {
  }

  onSubmit(){
    if(this.vehiculoForm.valid){
      if(this.tipoVehiculo=='Carro'){
        this.entrandoCarro();
      }
      if(this.tipoVehiculo=='Moto'){
        this.entrandoMoto();
      }
    }
    //this.appComponent.getAllComprobantes();
    this.vehiculoForm.reset();
  }

  entrandoCarro(){
    let car = { 'placa': this.vehiculoForm.controls['placa'].value };
    this.vigilanteService.saveCar(car)
    .subscribe(response => {
      alert('Carro agregado');
      this.appComponent.getAllComprobantes();
    },
    (error: Response) => {
      this.errores = error.json();
      alert(this.errores.message);
    });
  }

  entrandoMoto(){
    let moto = { 'placa': this.vehiculoForm.controls['placa'].value,
                  'cilindraje':  this.vehiculoForm.controls['cilindraje'].value};
    this.vigilanteService.saveMoto(moto)
    .subscribe(response => {
      alert('Moto agregada');
      this.appComponent.getAllComprobantes();
    },
    (error: Response) => {
      this.errores = error.json();
      alert(this.errores.message);
    });
  }

  checkclic(val){
    this.tipoVehiculo=val;
    if(this.tipoVehiculo=='Carro'){
      this.disable=false;
    }
    if(this.tipoVehiculo=='Moto'){
      this.disable=true;
    }
  }
}
