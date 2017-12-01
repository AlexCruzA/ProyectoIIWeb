import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstadoService } from '../estado.service';
import { Estado } from '../estado';

@Component({
  selector: 'app-estado-detail',
  templateUrl: './estado-detail.component.html',
  styleUrls: ['./estado-detail.component.css']
})
export class EstadoDetailComponent implements OnInit, OnDestroy {

  estado: Estado;
  private sub: any;
  constructor(private route: ActivatedRoute, private service: EstadoService) { }

  ngOnInit() {
  	this.sub = this.route.params.subscribe(params => {
      this.estado = this.service.findById(params['id']);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
