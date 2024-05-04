import { Injectable } from '@angular/core';
import { Donacion } from './donacion.model';

@Injectable({
  providedIn: 'root'
})
export class DonacionService {
  donacion!:Donacion[];
  constructor() {
    this.donacion = JSON.parse(localStorage.getItem("donaciones") || '[]');
  }

  nuevaDonacion(): Donacion{
    return {
      nombre: '',
      monto: 0,
      fecha: '',
    }
  }

  agregarDonacion(donaciones: Donacion){
    this.donacion.unshift(donaciones);
    localStorage.setItem('donaciones',JSON.stringify(this.donacion));
  }

  getDonacion(){
    return this.donacion;
  }
}
