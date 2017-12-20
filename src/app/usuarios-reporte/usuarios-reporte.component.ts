import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuarios-reporte',
  templateUrl: './usuarios-reporte.component.html',
  styleUrls: ['./usuarios-reporte.component.css']
})
export class UsuariosReporteComponent implements OnInit {

	data: Usuario[];
	constructor(private service: UsuarioService) { }

	ngOnInit() {
		this.data = this.service.read();
	}

}
