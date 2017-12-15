import { Injectable } from '@angular/core';
import { Estado } from './estado';

@Injectable()
export class EstadoService {
  
  data: Estado[];
  constructor() { 
   	this.data = JSON.parse(localStorage.getItem('estados') || '[]');
  }

   read() {
    this.data = JSON.parse(localStorage.getItem('estados') || '[]');
    return this.data;
  }

  save(data: Estado[]) {
    this.data = data;
    localStorage.setItem('estados', JSON.stringify(this.data));
  }

  findById(id: string) {
    return this.data.find(x => x.id === id);
  }
}
