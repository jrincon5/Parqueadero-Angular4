import { Component, OnInit } from '@angular/core';
import { VigilanteService } from './dashboard/vigilante.service';
import { Comprobante } from './dashboard/Comprobante';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [VigilanteService]
})
export class AppComponent implements OnInit{

  private comprobantes: Comprobante[];
  title = 'Parqueadero Ceiba';

  constructor(private vigilanteService: VigilanteService) { }

  ngOnInit() {
    this.getAllComprobantes();
  }

  getAllComprobantes(){
    this.vigilanteService.findAll().subscribe(
      comprobantes => {
        this.comprobantes = comprobantes;
      },
      err => {
        console.log(err);
      });
  }
}
