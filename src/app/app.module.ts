import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UsuariosCrudComponent } from './usuarios-crud/usuarios-crud.component';
import { ProyectosCrudComponent } from './proyectos-crud/proyectos-crud.component';
import { EstadosCrudComponent } from './estados-crud/estados-crud.component';
import { InicioComponent } from './inicio/inicio.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProyectoDetailComponent } from './proyecto-detail/proyecto-detail.component';
import { ProyectoService } from './proyecto.service';
import { UsuarioDetailComponent } from './usuario-detail/usuario-detail.component';
import { UsuarioService } from './usuario.service';
import { EstadoDetailComponent } from './estado-detail/estado-detail.component';
import { EstadoService } from './estado.service';

import {DndModule} from 'ng2-dnd';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosCrudComponent,
    ProyectosCrudComponent,
    EstadosCrudComponent,
    InicioComponent,
    DashboardComponent,
    ProyectoDetailComponent,
    UsuarioDetailComponent,
    EstadoDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DndModule.forRoot(),
  ],
  providers: [ProyectoService, UsuarioService, EstadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
