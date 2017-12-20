import { Component, OnInit } from '@angular/core';
import { Estado } from '../estado'
import { EstadoService } from '../estado.service';

@Component({
  selector: 'app-estados-reporte',
  templateUrl: './estados-reporte.component.html',
  styleUrls: ['./estados-reporte.component.css']
})
export class EstadosReporteComponent implements OnInit {

	data: Estado[];
	constructor(private service: EstadoService) { }

	ngOnInit() {
	    this.data = this.service.read();
	}

}
