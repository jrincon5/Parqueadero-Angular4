export class Comprobante {
 
    placa: string;
    tipoVehiculo: string;
    fechaEntrada: Date;
   
    constructor(placa: string, tipoVehiculo: string, fechaEntrada: Date){
      this.placa = placa;
      this.tipoVehiculo = tipoVehiculo;
      this.fechaEntrada = fechaEntrada;
    }

  }