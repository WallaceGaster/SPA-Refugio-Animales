import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Donacion } from '../shared/donacion.model';
import { FormsModule } from '@angular/forms';
import { DonacionService } from '../shared/donacion.service';

@Component({
  selector: 'app-donar-actual',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatDatepickerModule, FormsModule],
  templateUrl: './donar-actual.component.html',
  styleUrl: './donar-actual.component.css'
})
export class DonarActualComponent {
  hide=true;
  value!:Donacion;
  name:string="";
  monto:number=0;
  @Output() nuevaDonacion = new EventEmitter<Donacion>();

  constructor(public donacionService:DonacionService){

  }

  ngOnInit() {
    this.value = this.donacionService.nuevaDonacion();
  }

  addNewItem() {
    this.value.nombre = this.name;
    this.value.monto = this.monto;
    let Fecha = new Date();
    let FechaActual =
      Fecha.getDate() +
      '/' +
      (Fecha.getMonth() + 1) +
      '/' +
      Fecha.getFullYear();
    this.value.fecha = FechaActual;
    this.nuevaDonacion.emit(this.value);
    this.value = this.donacionService.nuevaDonacion();
  }
  
  myFilter = (d: Date | null): boolean => {
    const fecha = new Date();
    const day = (d || new Date()).getDate();
    const month = (d || new Date()).getMonth();
    const year = (d || new Date()).getFullYear();
    let ayer = fecha.getDate() - 1;
    let mes = fecha.getMonth();
    let anio = fecha.getFullYear();
    return (
      (day > ayer && month === mes && year === anio) ||
      (month > mes && year === anio) ||
      year > anio
    );
  };
}
