import { Component, OnInit } from '@angular/core';
import { Estado } from '../estado'
import { EstadoService } from '../estado.service';

@Component({
  selector: 'app-estados-crud',
  templateUrl: './estados-crud.component.html',
  styleUrls: ['./estados-crud.component.css']
})
export class EstadosCrudComponent implements OnInit {

  message:string;
	data: Estado[];
	current_estado: Estado;
	crud_operation = { is_new: false, is_visible: false };
	constructor(private service: EstadoService) { }

  ngOnInit() {
    this.data = this.service.read();
  	this.current_estado = new Estado();
  }

 new(){
    this.current_estado = new Estado();
  	this.crud_operation.is_visible = true;
  	this.crud_operation.is_new = true;
  }

  edit(row) {
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = false;
    this.current_estado = row;
  }

  delete(row) {
    this.crud_operation.is_new = false;
    const index = this.data.indexOf(row, 0);
    if (index > -1) {
      this.data.splice(index, 1);
    }
    this.saveD();
  }

  save() {
    if (this.current_estado.id !== "" 
      && this.current_estado.descripcion !== ""
      && this.current_estado.orden !== ""
      && this.current_estado.id !== undefined 
      && this.current_estado.descripcion !== undefined
      && this.current_estado.orden !== undefined) {

      if (this.crud_operation.is_new) {
        this.data.push(this.current_estado);
      }
      this.service.save(this.data);
      this.current_estado = new Estado();
      this.crud_operation.is_visible = false;
    }
    this.message = "Debe llenar todos los campos";
  }

  saveD(){
    if (this.crud_operation.is_new) {
        this.data.push(this.current_estado);
     }
    this.service.save(this.data);
    this.current_estado = new Estado();
    this.crud_operation.is_visible = false;
  }
}
