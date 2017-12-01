import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable()
export class UsuarioService {
  data: Usuario[];
  constructor() { 
   	this.data = JSON.parse(localStorage.getItem('usuarios') || '[]');
  }

   read() {
    this.data = JSON.parse(localStorage.getItem('usuarios') || '[]');
    return this.data;
  }

  save(data: Usuario[]) {
    this.data = data;
    localStorage.setItem('usuarios', JSON.stringify(this.data));
  }

  findByName(nombre: string) {
    return this.data.find(x => x.nombre === nombre);
  }
}
