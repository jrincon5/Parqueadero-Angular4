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
  disable: boolean = true;
  errores: any;

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
        let car = { 'placa': this.vehiculoForm.controls['placa'].value };
        this.vigilanteService.saveCar(car)
        .subscribe(response => {
          alert('Carro agregado');
        },
        (error: Response) => {
          this.errores = error.json();
          alert(this.errores.message);
        });
      }
      if(this.tipoVehiculo=='Moto'){
        let moto = { 'placa': this.vehiculoForm.controls['placa'].value,
                      'cilindraje':  this.vehiculoForm.controls['cilindraje'].value};
        this.vigilanteService.saveMoto(moto)
        .subscribe(response => {
          alert('Moto agregada');
        },
        (error: Response) => {
          this.errores = error.json();
          alert(this.errores.message);
        });
      }
    }
    this.appComponent.getAllComprobantes();
    this.vehiculoForm.reset();
  }

  checkclic(val){
    console.log(val);
    this.tipoVehiculo=val;
    if(this.tipoVehiculo=='Carro'){
      this.vehiculoForm.patchValue({cilindraje: '',enable:true});
    }
    if(this.tipoVehiculo=='Moto'){
      this.vehiculoForm.patchValue({cilindraje: '',enable:false});
    }
  }
}
