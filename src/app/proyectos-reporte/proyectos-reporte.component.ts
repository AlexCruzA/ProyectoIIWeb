import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../proyecto';
import { ProyectoService } from '../proyecto.service';

@Component({
  selector: 'app-proyectos-reporte',
  templateUrl: './proyectos-reporte.component.html',
  styleUrls: ['./proyectos-reporte.component.css']
})
export class ProyectosReporteComponent implements OnInit {
   
	data: Proyecto[];
	constructor(private service: ProyectoService) { }

	ngOnInit() {
		this.data = this.service.read();
	}
}
