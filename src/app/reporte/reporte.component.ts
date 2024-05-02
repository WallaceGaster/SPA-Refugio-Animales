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
  citas: any[] = [];
  fechaActual: Date = new Date();

  constructor(private citasService: CitasService) {}

  ngOnInit(): void {
    this.recuperarCitas();
  }

  recuperarCitas(): any[] {
    this.obcita = this.citasService.getCitas();
    return this.obcita; 
  }  

  citasAnteriores(): Cita[] {
    return this.citas.filter(cita => new Date(cita.FechaCita) < this.fechaActual);
  }

  citasPosteriores(): Cita[] {
    return this.citas.filter(cita => new Date(cita.FechaCita) >= this.fechaActual);
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
