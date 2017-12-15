import { Component, OnInit } from '@angular/core';
import { Tarea } from '../tarea';
import { TareaService } from '../tarea.service';

@Component({
  selector: 'app-tareas-crud',
  templateUrl: './tareas-crud.component.html',
  styleUrls: ['./tareas-crud.component.css']
})
export class TareasCrudComponent implements OnInit {

	data: Tarea[];
	current_tarea: Tarea;
	crud_operation = { is_new: false, is_visible: false };
	constructor(private service: TareaService) { }

  ngOnInit() {
  	this.data = this.service.read();
  	this.current_tarea = new Tarea();
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
    this.save();
  }
   save() {
    if (this.crud_operation.is_new) {
      this.data.push(this.current_tarea);
    }
    this.service.save(this.data);
    this.current_tarea = new Tarea();
    this.crud_operation.is_visible = false;
  }
}
