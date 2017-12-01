import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EstadosCrudComponent }   from './estados-crud/estados-crud.component';
import { ProyectosCrudComponent } from './proyectos-crud/proyectos-crud.component';
import { UsuariosCrudComponent } from './usuarios-crud/usuarios-crud.component';
import { InicioComponent } from './inicio/inicio.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProyectoDetailComponent } from './proyecto-detail/proyecto-detail.component';
import { UsuarioDetailComponent } from './usuario-detail/usuario-detail.component';
import { EstadoDetailComponent } from './estado-detail/estado-detail.component';

 
const routes: Routes = [
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'estados', component: EstadosCrudComponent },
  { path: 'proyectos', component: ProyectosCrudComponent },
  { path: 'usuarios', component: UsuariosCrudComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', component: InicioComponent },
  { path: 'proyectos/:nombre', component: ProyectoDetailComponent },
  { path: 'usuarios/:nombre', component: UsuarioDetailComponent },
  { path: 'estados/:id', component: EstadoDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
