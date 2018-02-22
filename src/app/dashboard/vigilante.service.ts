import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Comprobante } from './model/Comprobante';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';

@Injectable()
export class VigilanteService {

  private apiSearch = 'http://localhost:8090/parqueadero/consultarvehiculo';

  constructor(private http: Http) { }

  findAll(): Observable<Comprobante[]>{
    return this.http.get(this.apiSearch)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
