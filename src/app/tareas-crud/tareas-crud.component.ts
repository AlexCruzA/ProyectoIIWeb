import { Component, OnInit } from '@angular/core';
import { Tarea } from '../tarea';
import { TareaService } from '../tarea.service';
import { Proyecto } from '../proyecto';
import { ProyectoService } from '../proyecto.service';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-tareas-crud',
  templateUrl: './tareas-crud.component.html',
  styleUrls: ['./tareas-crud.component.css']
})
export class TareasCrudComponent implements OnInit {

	data: Tarea[];
  dataP: Proyecto[];
  dataU: Usuario[];
	current_tarea: Tarea;
  usuarioTemp: Usuario;
	crud_operation = { is_new: false, is_visible: false };
	constructor(private service: TareaService, private serviceU: UsuarioService, private serviceP: ProyectoService) { }

  ngOnInit() {
  	this.data = this.service.read();
    this.dataP = this.serviceP.read();
    this.dataU = this.serviceU.read();
  	this.current_tarea = new Tarea();
    this.usuarioTemp = new Usuario();
  }

  new(){
    this.current_tarea = new Tarea();
  	this.crud_operation.is_visible = true;
  	this.crud_operation.is_new = true;
  }

  edit(row) {
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = false;
    this.current_tarea = row;
  }

  delete(row) {
    this.crud_operation.is_new = false;
    const index = this.data.indexOf(row, 0);
    if (index > -1) {
      this.data.splice(index, 1);
    }
    this.personasContadorMenos(row.usuario);
    this.save();
  }
  save() {
    if(this.current_tarea.id !== "" && this.current_tarea.nombre !== "" && this.current_tarea.proyecto !== "" 
      && this.current_tarea.usuario !== ""){

      if (this.crud_operation.is_new) {
        this.data.push(this.current_tarea);
      }
      this.personasContador(this.current_tarea.usuario);
      this.service.save(this.data);
      this.current_tarea = new Tarea();
      this.crud_operation.is_visible = false;
    }
  }
  personasContador(row){
   //debugger;
    for (var i = 0; i < this.dataU.length; ++i) {
      if (this.dataU[i].nombre == row) {
        this.usuarioTemp = this.dataU[i];
        var suma = Number(this.usuarioTemp.contador.replace(/[^0-9\.-]+/g,"")) + Number("1".replace(/[^0-9\.-]+/g,""));

        this.usuarioTemp.contador = ( suma.toString());
        this.serviceU.save(this.dataU);
        return;
      }
    }
  }

  personasContadorMenos(row){
    //debugger;
    for (var i = 0; i < this.dataU.length; ++i) {
      if (this.dataU[i].nombre == row) {
        this.usuarioTemp = this.dataU[i];
        var resta = Number(this.usuarioTemp.contador.replace(/[^0-9\.-]+/g,"")) - Number("1".replace(/[^0-9\.-]+/g,""));

        this.usuarioTemp.contador = (resta.toString());
        this.serviceU.save(this.dataU);
        return;
      }
    }
  }
}
