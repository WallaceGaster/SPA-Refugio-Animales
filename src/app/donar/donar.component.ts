import { Component } from '@angular/core';
import { DonarActualComponent } from '../donar-actual/donar-actual.component';
import { CommonModule } from '@angular/common';
import { Donacion } from '../shared/donacion.model';
import { DonacionService } from '../shared/donacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-donar',
  standalone: true,
  imports: [DonarActualComponent, CommonModule],
  templateUrl: './donar.component.html',
  styleUrl: './donar.component.css',
})
export class DonarComponent {
  items!: Donacion[];
  auxiliar!:Donacion;

  constructor(public donacionService: DonacionService) {
    this.items = this.donacionService.getDonacion();
    this.auxiliar = this.donacionService.nuevaDonacion();
  }

  addItem(newItem: Donacion) {
    this.donacionService.agregarDonacion(newItem);
    Swal.fire({
      title: '¡Éxito!',
      text: '¡Gracias por donar, apreciamos tu ayuda!',
      icon: 'success',
      confirmButtonText: '¡Genial!',
    })
  }
}
