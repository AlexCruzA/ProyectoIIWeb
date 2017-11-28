import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../proyecto'

@Component({
  selector: 'app-proyectos-crud',
  templateUrl: './proyectos-crud.component.html',
  styleUrls: ['./proyectos-crud.component.css']
})
export class ProyectosCrudComponent implements OnInit {

	data: Proyecto[];
	current_proyecto: Proyecto;
	crud_operation = { is_new: false, is_visible: false };
	constructor() { }

  ngOnInit() {
  	this.data = JSON.parse(localStorage.getItem('proyectos') || '[]');
  	this.current_proyecto = new Proyecto();
  }

  new(){
    this.current_proyecto = new Proyecto();
  	this.crud_operation.is_visible = true;
  	this.crud_operation.is_new = true;
  }

  edit(row) {
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = false;
    this.current_proyecto = row;
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
    if (this.crud_operation.is_new) {
      this.data.push(this.current_proyecto);
    }
    localStorage.setItem('Proyectos', JSON.stringify(this.data));
    this.current_proyecto = new Usuario();
    this.crud_operation.is_visible = false;
  }
}
