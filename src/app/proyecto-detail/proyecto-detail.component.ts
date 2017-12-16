import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProyectoService } from '../proyecto.service';
import { Proyecto } from '../proyecto';

@Component({
  selector: 'app-proyecto-detail',
  templateUrl: './proyecto-detail.component.html',
  styleUrls: ['./proyecto-detail.component.css']
})
export class ProyectoDetailComponent implements OnInit, OnDestroy {

  proyecto: Proyecto;
  data: Proyecto[];
  private sub: any;
  constructor(private route: ActivatedRoute, private service: ProyectoService) { }

  ngOnInit() {
    this.data = this.service.read();
  	this.sub = this.route.params.subscribe(params => {
      this.proyecto = this.service.findByName(params['nombre']);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
