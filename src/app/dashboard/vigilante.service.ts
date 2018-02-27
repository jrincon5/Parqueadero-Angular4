import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';

@Injectable()
export class VigilanteService {

  private apiSearch = 'http://localhost:8090/parqueadero/consultarvehiculo';
  private apiSaveCar = 'http://localhost:8090/parqueadero/agregarcarro';
  private apiSaveMoto = 'http://localhost:8090/parqueadero/agregarmoto';
  private apiRemove = 'http://localhost:8090/parqueadero/removervehiculo';
  private apiComprobante = 'http://localhost:8090/parqueadero/consultarcomprobante';

  constructor(private http: Http) { }

  findAll(){
    return this.http.get(this.apiSearch);
  }

  findComprobante(placa){
    return this.http.get(this.apiComprobante, placa);
  }

  saveCar(carro) {
    return this.http.post(this.apiSaveCar, carro);
  }

  saveMoto(moto){
    return this.http.post(this.apiSaveMoto, moto);
  }

  sacarVehiculo(placa){
    return this.http.put(this.apiRemove, placa);
  }
}