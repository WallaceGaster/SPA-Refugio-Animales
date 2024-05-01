import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Mascota } from '../mascota';
import { MascotaService } from '../shared/mascota.service';

@Component({
  selector: 'app-unamascota',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './unamascota.component.html',
  styleUrl: './unamascota.component.css'
})
export class UnamascotaComponent {
  @Input() mascota!:Mascota;
  constructor(public mascotaService:MascotaService, public activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.mascota=mascotaService.getUnaMascota(params['id']);
    })
  }
}
