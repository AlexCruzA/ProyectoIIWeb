import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { Tarea } from '../tarea';
import { TareaService } from '../tarea.service';

@Component({
  selector: 'app-usuarios-crud',
  templateUrl: './usuarios-crud.component.html',
  styleUrls: ['./usuarios-crud.component.css']
})
export class UsuariosCrudComponent implements OnInit {

  data: Usuario[];
  dataT: Tarea[];
  current_usuario: Usuario;
  crud_operation = { is_new: false, is_visible: false };
  constructor(private service: UsuarioService, private serviceT: TareaService) { }

  ngOnInit() {
    this.data = this.service.read();
    this.dataT = this.serviceT.read();
  	this.current_usuario = new Usuario();
  }

  new(){
  	this.current_usuario = new Usuario();
  	this.crud_operation.is_visible = true;
  	this.crud_operation.is_new = true;
  }

  edit(row) {
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = false;
    this.current_usuario = row;
  }

  delete(row) {
    this.crud_operation.is_new = false;
    const index = this.data.indexOf(row, 0);
    if (index > -1) {
      this.data.splice(index, 1);
    }
    this.save();
  }
  save() {
    if(this.current_usuario.avatar !== "" 
      && this.current_usuario.id !== "" 
      && this.current_usuario.nombre !== "" 
      && this.current_usuario.tarea !== ""){

      if (this.crud_operation.is_new) {
        this.data.push(this.current_usuario);
      }
      this.service.save(this.data);
      this.current_usuario = new Usuario();
      this.crud_operation.is_visible = false;
    }
  }
}
