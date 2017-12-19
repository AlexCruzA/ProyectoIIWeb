import { Component, OnInit } from '@angular/core';
import { Tarea } from '../tarea';
import { TareaService } from '../tarea.service';
import { Proyecto } from '../proyecto';
import { ProyectoService } from '../proyecto.service';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { Estado } from '../estado';
import { EstadoService } from '../estado.service';


@Component({
  selector: 'app-tareas-crud',
  templateUrl: './tareas-crud.component.html',
  styleUrls: ['./tareas-crud.component.css']
})
export class TareasCrudComponent implements OnInit {


  dataE: Estado[];
  data: Tarea[];
  dataP: Proyecto[];
  dataU: Usuario[];
  estadoTemp: Estado;
	current_tarea: Tarea;
  usuarioTemp: Usuario;
  proyectoTemp: Proyecto;
	crud_operation = { is_new: false, is_visible: false };
	constructor(private service: TareaService, private serviceU: UsuarioService, private serviceP: ProyectoService,
   private serviceE: EstadoService) { }

  ngOnInit() {
  	this.data = this.service.read();
    this.dataP = this.serviceP.read();
    this.dataU = this.serviceU.read();
    this.dataE = this.serviceE.read();
  	this.current_tarea = new Tarea();
    this.usuarioTemp = new Usuario();
    this.proyectoTemp = new Proyecto();
    this.estadoTemp = new Estado();
  }

  new(){
    this.current_tarea = new Tarea();
  	this.crud_operation.is_visible = true;
  	this.crud_operation.is_new = true;
    this.current_tarea.estado = "Open";
  }

  edit(row) {
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = false;
    this.current_tarea = row;
    this.personasContadorMenos(row.usuario);
    this.proyectosContadorMenos(row.proyecto);
    this.estadosContadorMenos(row.estado);
  }

  delete(row) {
    this.crud_operation.is_new = false;
    const index = this.data.indexOf(row, 0);
    if (index > -1) {
      this.data.splice(index, 1);
    }
    this.personasContadorMenos(row.usuario);
    this.proyectosContadorMenos(row.proyecto);
    this.estadosContadorMenos(row.estado);
    this.save();
  }
  save() {
    if(this.current_tarea.id !== "" && this.current_tarea.nombre !== "" && this.current_tarea.proyecto !== "" 
      && this.current_tarea.usuario !== ""){

      if (this.crud_operation.is_new) {
        this.data.push(this.current_tarea);
      }
      this.personasContador(this.current_tarea.usuario);
      this.proyectosContador(this.current_tarea.proyecto);
      this.estadosContador(this.current_tarea.estado);
      this.service.save(this.data);
      this.current_tarea = new Tarea();
      this.crud_operation.is_visible = false;
    }
  }
  personasContador(row){
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

  proyectosContador(row){
    for (var i = 0; i < this.dataP.length; ++i) {
      if (this.dataP[i].nombre == row) {
        this.proyectoTemp = this.dataP[i];
        var suma = Number(this.proyectoTemp.contador.replace(/[^0-9\.-]+/g,"")) + Number("1".replace(/[^0-9\.-]+/g,""));
        this.proyectoTemp.contador = (suma.toString());
        this.serviceP.save(this.dataP);
        return;
      }
    }
  }

  proyectosContadorMenos(row){
    for (var i = 0; i < this.dataP.length; ++i) {
      if (this.dataP[i].nombre == row) {
        this.proyectoTemp = this.dataP[i];
        var suma = Number(this.proyectoTemp.contador.replace(/[^0-9\.-]+/g,"")) - Number("1".replace(/[^0-9\.-]+/g,""));
        this.proyectoTemp.contador = (suma.toString());
        this.serviceP.save(this.dataP);
        return;
      }
    }
  }

  estadosContador(row){
    for (var i = 0; i < this.dataE.length; ++i) {
      if (this.dataE[i].descripcion == row) {
        this.estadoTemp = this.dataE[i];
        //this.estadoTemp.contador = (this.estadoTemp.contador +1);
        var suma = Number(this.estadoTemp.contador.replace(/[^0-9\.-]+/g,"")) + Number("1".replace(/[^0-9\.-]+/g,""));
        this.estadoTemp.contador = (suma.toString());
        this.serviceE.save(this.dataE);
        return;
      }
    }
  }

  estadosContadorMenos(row){
    for (var i = 0; i < this.dataE.length; ++i) {
      if (this.dataE[i].descripcion == row) {
        this.estadoTemp = this.dataE[i];
        //this.estadoTemp.contador = (this.estadoTemp.contador +1);
        var suma = Number(this.estadoTemp.contador.replace(/[^0-9\.-]+/g,"")) - Number("1".replace(/[^0-9\.-]+/g,""));
        this.estadoTemp.contador = (suma.toString());
        this.serviceE.save(this.dataE);
        return;
      }
    }
  }
}
