import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Mascota } from '../mascota';
import { MascotaService } from '../shared/mascota.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mascotas',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './mascotas.component.html',
  styleUrl: './mascotas.component.css'
})
export class MascotasComponent {

  array:Mascota [] = [];

  constructor(public mascotaService: MascotaService) {

  }

  ngOnInit() {
    console.log("En este instante el componente ha cargado");
    this.recuperarDatos();
  }

  recuperarDatos():void {
    console.log("entre");

    this.mascotaService.retornar().subscribe({
      next: this.successRequest.bind(this),
      error: (err) => {console.log(err)}
    });
  }

  successRequest(data:any):void {
    console.log("data",data);
    this.array = data.mascotas; 
    console.log("array",this.array);
  }

}
