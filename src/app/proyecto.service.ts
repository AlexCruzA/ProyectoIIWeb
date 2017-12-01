import { Injectable } from '@angular/core';
import { Proyecto } from './proyecto';

@Injectable()
export class ProyectoService {
  data: Proyecto[];
  constructor() {
    this.data = JSON.parse(localStorage.getItem('proyectos') || '[]');
  }

   read() {
    this.data = JSON.parse(localStorage.getItem('proyectos') || '[]');
    return this.data;
  }

  save(data: Proyecto[]) {
    this.data = data;
    localStorage.setItem('proyectos', JSON.stringify(this.data));
  }

  findByName(nombre: string) {
    return this.data.find(x => x.nombre === nombre);
  }
}

