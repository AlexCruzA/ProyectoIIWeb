import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TareaService } from '../tarea.service';
import { Tarea } from '../tarea';

@Component({
  selector: 'app-tarea-detail',
  templateUrl: './tarea-detail.component.html',
  styleUrls: ['./tarea-detail.component.css']
})
export class TareaDetailComponent implements OnInit {

  tarea: Tarea;
  private sub: any;
  constructor(private route: ActivatedRoute, private service: TareaService) { }

  ngOnInit() {
  	this.sub = this.route.params.subscribe(params => {
      this.tarea = this.service.findByName(params['nombre']);
    });
  }

   ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
