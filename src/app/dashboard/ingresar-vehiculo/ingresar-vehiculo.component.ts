import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VigilanteService } from '../vigilante.service';
import { AppComponent } from '../../app.component';
import { Carro } from '../Carro';
import { Moto } from '../Moto';
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
        let carro: Carro = new Carro
        (this.vehiculoForm.controls['placa'].value);
        this.vigilanteService.saveCar(carro).subscribe();
        alert('Carro agregado');
      }
      if(this.tipoVehiculo=='Moto'){
        let moto: Moto = new Moto
        (this.vehiculoForm.controls['placa'].value,
        this.vehiculoForm.controls['cilindraje'].value);
        this.vigilanteService.saveMoto(moto).subscribe();
        alert('Moto agregada');
      }
    }
    this.appComponent.getAllComprobantes();
    window.location.reload();
  }

  checkclic(val){
    console.log(val);
    this.tipoVehiculo=val;
    /*if(this.tipoVehiculo=='Carro'){
      this.vehiculoForm.patchValue({
        cilindraje: {disabled:true}});
    }else if(this.tipoVehiculo=='Moto'){
      this.vehiculoForm.patchValue({
        cilindraje: {disabled:false}});
    }*/
  }
}
