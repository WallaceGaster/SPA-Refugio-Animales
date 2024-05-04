import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { CitasComponent } from './citas/citas.component';
import { SearchComponent } from './search/search.component';
import { ReporteComponent } from './reporte/reporte.component';
import { DonarComponent } from './donar/donar.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'mascotas', component: MascotasComponent },
    { path: 'galeria', component: GaleriaComponent },
    { path: 'reporte', component: ReporteComponent },
    { path: 'donar', component: DonarComponent},
    { path: 'mascota/:id', component: CitasComponent},
    { path: 'buscador/:nombrem', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
