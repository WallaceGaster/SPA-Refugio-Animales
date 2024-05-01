import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductosService } from '../shared/productos.service'; //Servicio Productos
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public productosService: ProductosService) {}
}