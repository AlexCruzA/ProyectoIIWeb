import { Component, OnInit } from '@angular/core';
import { Tarea } from '../tarea'
import { TareaService } from '../tarea.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  tareas: Array<Tarea> = [];
  /*shoppingBasket: Array<Tarea> = [];*/

  data: Tarea[];
  current_tarea: Tarea;

  constructor(private service: TareaService) {
      this.tareas.push(new Tarea());
  }

  ngOnInit() {
  this.data = this.service.read();
    this.current_tarea = new Tarea();
  }

 /* addToEstado($event: any) {
      let newTarea: Tarea = $event.dragData;
      this.shoppingBasket.push(new Tarea());
  }*/
}