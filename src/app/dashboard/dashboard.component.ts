import { Component, OnInit } from '@angular/core';
import { Tarea } from '../tarea'
import { TareaService } from '../tarea.service';
import { DragulaService } from 'ng2-dragula';
import { EstadoService } from '../estado.service';
import { Estado } from '../estado';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  tareas: Array<Tarea> = [];

  data: Tarea[];
  dataE: Estado[];
  current_tarea: Tarea;

  constructor(private serviceE: EstadoService ,private service: TareaService, private dragulaService: DragulaService) {

    dragulaService.drag.subscribe((value) => {
    console.log(`drag: ${value[0]}`);
    this.onDrag(value.slice(1));
    });
    dragulaService.drop.subscribe((value) => {
      console.log(`drop: ${value[0]}`);
      this.onDrop(value.slice(1));
    });
    dragulaService.over.subscribe((value) => {
      console.log(`over: ${value[0]}`);
      this.onOver(value.slice(1));
    });
    dragulaService.out.subscribe((value) => {
      console.log(`out: ${value[0]}`);
      this.onOut(value.slice(1));
    });
  }

  ngOnInit() {
    this.data = this.service.read();
    this.dataE = this.serviceE.read();
  }

  private onDrag(args) {
    let [e, el] = args;
    // do something
  }
  
  private onDrop(args) {
    let [e, el] = args;
    // do something
  }
  
  private onOver(args) {
    let [e, el, container] = args;
    // do something
  }
  
  private onOut(args) {
    let [e, el, container] = args;
    // do something
  }
}