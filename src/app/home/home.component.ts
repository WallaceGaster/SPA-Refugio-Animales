import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductosService } from '../shared/productos.service'; //Servicio Productos
import { CommonModule } from '@angular/common';
import { DomseguroPipe } from '../domseguro.pipe';
import { MonedamxnPipe } from '../monedamxn.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, DomseguroPipe, MonedamxnPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  video:string="u0XHVssfsYM";

  constructor(public productosService: ProductosService) {}
}