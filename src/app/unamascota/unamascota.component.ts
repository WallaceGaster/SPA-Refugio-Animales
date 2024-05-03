import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Mascota } from '../mascota';
import { MascotaService } from '../shared/mascota.service';
import { CitasService } from '../shared/citas.service';
import { Cita } from '../shared/cita.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-unamascota',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './unamascota.component.html',
  styleUrl: './unamascota.component.css'
})
export class UnamascotaComponent implements OnInit{
  @Input() mascota!:Mascota;
  constructor(public mascotaService:MascotaService, public activatedRoute: ActivatedRoute, private citasService: CitasService ) {
    this.activatedRoute.params.subscribe(params => {
      this.mascota=mascotaService.getUnaMascota(params['id']);
    })
  }
  obcita!: Cita[];
  citas: any[] = [];
  fechaActual: Date = new Date();

  ngOnInit(): void {
    this.recuperarCitas();
  }
  recuperarCitas(): any[] {
    this.obcita = this.citasService.getCitas();
    this.obcita = this.obcita.filter(cita => cita.Mascota.nombre === this.mascota.nombre);
    return this.obcita; 
  }  
}
