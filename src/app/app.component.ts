import { Component, OnInit } from '@angular/core';
import { VigilanteService } from './dashboard/vigilante.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [VigilanteService]
})
export class AppComponent implements OnInit{

  comprobantes: any[];
  title = 'Parqueadero Ceiba';

  constructor(private vigilanteService: VigilanteService) { }

  ngOnInit() {
    this.getAllComprobantes();
    //setInterval(() =>{
    //  this.getAllComprobantes();
    //},1000);
  }

  getAllComprobantes(){
    this.vigilanteService.findAll()
    .subscribe(response => {
      this.comprobantes = response.json();
    });
  }
}
