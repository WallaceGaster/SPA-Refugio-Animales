import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { Mascota } from '../mascota';

@Injectable({
  providedIn: 'root',
})
export class MascotaService {
  urlAPI: string = 'https://mascotas-2.free.beeceptor.com/todos';
  arreglo: Mascota[] = [];

  constructor(private http: HttpClient) {}

  retornar() {
    return this.http.get(this.urlAPI).pipe(take(1));
  }

  getUnaMascota(posicion: number):Mascota {
    this.retornar().subscribe({
      next: this.successRequest.bind(this),
      error: (err) => {
        console.log(err);
      },
    });
    return this.arreglo[posicion];
  }

  successRequest(data:any):void {
    console.log("data",data);
    this.arreglo = data.mascotas; 
    console.log("array",this.arreglo);
  }

  searchMascota(nommas:string):number{
    
    this.retornar().subscribe({
      next: this.successRequest.bind(this),
      error: (err) => {
        console.log(err);
      },
    });
    return this.arreglo.findIndex(p=> p.nombre === nommas);
  }
}
