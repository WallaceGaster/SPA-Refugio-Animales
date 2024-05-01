import { Injectable } from '@angular/core';
import { Cita } from './cita.model';
import { Mascota } from "../mascota";

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  citas!:Cita[];
  mascota!:Mascota;

  constructor() {
    this.citas = JSON.parse(localStorage.getItem("datos") || '[]');
  }

  getCitas(){
    return this.citas;
  }

  agregarCita(citas: Cita){
    this.citas.push(citas);
    localStorage.setItem('datos',JSON.stringify(this.citas));
  }

  nuevaCita(): Cita{
    return {
      FechaActual: '',
      Hora: '',
      Nombre: '',
      Correo: '',
      Telefono: 0,
      Mascota: this.mascota,
      FechaCita: '',
      HoraCita: ''
    }
  }
}
