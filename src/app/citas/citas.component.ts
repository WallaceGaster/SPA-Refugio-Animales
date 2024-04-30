import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MascotaService } from '../shared/mascota.service';
import { Mascota } from '../mascota';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-citas',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [RouterModule, MatFormFieldModule, MatInputModule, MatDatepickerModule],
  templateUrl: './citas.component.html',
  styleUrl: './citas.component.css'
})
export class CitasComponent {

  mascota!:Mascota;
  constructor(public mascotaService:MascotaService, public activatedRoute: ActivatedRoute){
    this.activatedRoute.params.subscribe(params => {
    /*this.mascota=mascotaService.getUnaMascota(params['id']);*/
    })
  }
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDate();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };
}
