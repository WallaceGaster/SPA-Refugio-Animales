import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { CitasComponent } from './citas/citas.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'mascotas', component: MascotasComponent },
    { path: 'galeria', component: GaleriaComponent },
    { path: 'mascota/:id', component: CitasComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
