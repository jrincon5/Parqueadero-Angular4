import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Comprobante } from './Comprobante';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Carro } from './Carro';
import { Moto } from './Moto';
import { DatosComprobantePago } from './DatosComprobantePago';

@Injectable()
export class VigilanteService {

  private apiSearch = 'http://localhost:8090/parqueadero/consultarvehiculo';
  private apiSaveCar = 'http://localhost:8090/parqueadero/agregarcarro';
  private apiSaveMoto = 'http://localhost:8090/parqueadero/agregarmoto';
  private apiRemove = 'http://localhost:8090/parqueadero/removervehiculo';
  private apiComprobante = 'http://localhost:8090/parqueadero/consultarcomprobante';

  constructor(private http: Http) { }

  findAll(): Observable<Comprobante[]>{
    return this.http.get(this.apiSearch)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  findComprobante(placa: String): Observable<DatosComprobantePago>{
    return this.http.post(this.apiComprobante, placa)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  saveCar(carro: Carro): Observable<Carro> {
    return this.http.post(this.apiSaveCar, carro)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  saveMoto(moto: Moto): Observable<Moto> {
    return this.http.post(this.apiSaveMoto, moto)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  sacarVehiculo(placa: String): Observable<string> {
    return this.http.post(this.apiRemove, placa)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}