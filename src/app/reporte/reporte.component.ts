import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CitasService } from '../shared/citas.service';
import { Cita } from '../shared/cita.model';

@Component({
  selector: 'app-reporte',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reporte.component.html',
  styleUrl: './reporte.component.css'
})
export class ReporteComponent implements OnInit{
  obcita!: Cita[];
  FechaActual: Date = new Date();

  constructor(private citasService: CitasService) {}

  ngOnInit(): void {
    this.recuperarCitas();
  }

  recuperarCitas(): void {
    this.obcita = this.citasService.getCitas();
    console.log(this.obcita); 
  }  

  citasAnteriores(): Cita[] {
    const fechaActual = new Date(this.FechaActual); 
    return this.obcita.filter(cita => {
      const fechaCita = this.convertirACadena(cita.FechaCita);
      return fechaCita < fechaActual; 
    });
  }

  citasPosteriores(): Cita[] {
    const fechaActual = new Date(this.FechaActual); 
    return this.obcita.filter(cita => {
      const fechaCita = this.convertirACadena(cita.FechaCita);
      return fechaCita >= fechaActual; 
    });
  }

  convertirACadena(fecha: string): Date {
    const partes = fecha.split('/');
    const dia = parseInt(partes[0]);
    const mes = parseInt(partes[1]) - 1; 
    const anio = parseInt(partes[2]);
    return new Date(anio, mes, dia);
  }


  estilosTitulo: any = {
    color: 'green', 
    'text-align': 'center', 
    'font-size': '2rem', 
    'font-weight': 'bold', 
    'text-transform': 'uppercase',
    'text-shadow': '2px 2px 4px rgba(0, 0, 0, 0.5)'

  };

}
