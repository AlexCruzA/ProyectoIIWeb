import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuarios-crud',
  templateUrl: './usuarios-crud.component.html',
  styleUrls: ['./usuarios-crud.component.css']
})
export class UsuariosCrudComponent implements OnInit {

  data: Usuario[];
  current_usuario: Usuario;
  crud_operation = { is_new: false, is_visible: false };
  constructor(private service: UsuarioService) { }

  ngOnInit() {
    this.data = this.service.read();
  	this.current_usuario = new Usuario();
  }

  new(){
  	this.current_usuario = new Usuario();
  	this.crud_operation.is_visible = true;
  	this.crud_operation.is_new = true;
    this.current_usuario.contador = "0";
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
      && this.current_usuario.nombre !== ""){

      if (this.crud_operation.is_new) {
        this.data.push(this.current_usuario);
      }
      this.service.save(this.data);
      this.current_usuario = new Usuario();
      this.crud_operation.is_visible = false;
    }
  }
}
