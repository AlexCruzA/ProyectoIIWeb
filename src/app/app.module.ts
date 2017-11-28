import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsuariosCrudComponent } from './usuarios-crud/usuarios-crud.component';
import { ProyectosCrudComponent } from './proyectos-crud/proyectos-crud.component';
import { EstadosCrudComponent } from './estados-crud/estados-crud.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosCrudComponent,
    ProyectosCrudComponent,
    EstadosCrudComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
