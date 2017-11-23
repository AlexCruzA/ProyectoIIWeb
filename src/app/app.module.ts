import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsuariosCrudComponent } from './usuarios-crud/usuarios-crud.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosCrudComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
