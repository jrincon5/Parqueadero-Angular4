export class DatosComprobantePago {
 
    fechaEntrada: Date;
    fechaSalida: Date;
    totalHoras: number;
    totalPagar: number;
    estado: boolean;
    placaFk: string;

    constructor(fechaEntrada: Date,fechaSalida: Date,totalHoras: number,totalPagar: number,estado: boolean,placaFk: string){
      this.fechaEntrada = fechaEntrada;
      this.fechaSalida = fechaSalida;
      this.totalHoras = totalHoras;
      this.totalPagar = totalPagar;
      this.estado = estado;
      this.placaFk = placaFk;
    }

  }