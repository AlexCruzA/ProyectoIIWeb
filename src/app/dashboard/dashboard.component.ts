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
    shoppingBasket: Array<Tarea> = [];

    data: Tarea[];
    current_tarea: Tarea;

    constructor(private service: TareaService) {
        this.tareas.push(new Tarea());
    }

    ngOnInit() {
    this.data = this.service.read();
      this.current_tarea = new Tarea();
    }

   // orderedTarea($event: any) {
     //   let orderedTarea: Tarea = $event.dragData;
    //}

    addToEstado($event: any) {
        let newTarea: Tarea = $event.dragData;
        this.shoppingBasket.push(new Tarea());
       //this.shoppingBasket.sort((a: Tarea, b: Tarea) => {
          //  return a.descripcion.localeCompare(b.descripcion);
        //});
    }
}