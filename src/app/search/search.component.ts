import { Component } from '@angular/core';
import { UnamascotaComponent } from '../unamascota/unamascota.component';
import { Mascota } from '../mascota';
import { MascotaService } from '../shared/mascota.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [UnamascotaComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  nombrem: string="";
  indice: number=0; 

  mimascota:Mascota={
    nombre: "",
    edad: "",
    color: "",
    raza: "",
    tiempo: "", 
    descrip: "",
    img: ""
  };

  constructor(private mascotaServicio: MascotaService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params =>{
      this.nombrem=params['nombrem'];
      console.log(this.nombrem)
      this.indice = this.mascotaServicio.searchMascota(this.nombrem);
      console.log(this.indice);

      if(this.indice != -1) {
        this.mimascota=this.mascotaServicio.getUnaMascota(this.indice);
      }
    });
  }

}
