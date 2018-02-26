import { Component, OnInit, OnDestroy } from '@angular/core';
import { VigilanteService } from '../vigilante.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatosComprobantePago } from '../DatosComprobantePago';

@Component({
  selector: 'app-sacar-vehiculo',
  templateUrl: './sacar-vehiculo.component.html',
  styleUrls: ['./sacar-vehiculo.component.css'],
  providers: [VigilanteService]
})
export class SacarVehiculoComponent implements OnInit, OnDestroy {

  private comprobante: DatosComprobantePago;
  removeForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private vigilanteService: VigilanteService) { }

  ngOnInit() {

    //this.getComprobante("");
    this.removeForm = new FormGroup({
      placa: new FormControl('', Validators.required)
    });
  }

  ngOnDestroy(): void {
  }

  onSubmit(){
    if(this.removeForm.valid){
      let placa: String = this.removeForm.controls['placa'].value;
      this.vigilanteService.sacarVehiculo(placa).subscribe();
      //this.getComprobante(placa);
      alert('Vehículo removido');
      this.getComprobante(placa);
    }
    this.removeForm.reset();
    window.location.reload();
  }

  getComprobante(placa: String){
    this.vigilanteService.findComprobante(placa).subscribe(
      comprobante =>{
        this.comprobante=comprobante;
      },
      err => {
        console.log(err);
      });
  }
}