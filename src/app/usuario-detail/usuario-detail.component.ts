import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css']
})
export class UsuarioDetailComponent implements OnInit, OnDestroy {

  usuario: Usuario;
  private sub: any;
  constructor(private route: ActivatedRoute, private service: UsuarioService) { }

  ngOnInit() {
  	this.sub = this.route.params.subscribe(params => {
      this.usuario = this.service.findByName(params['nombre']);
    });
  }

   ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
