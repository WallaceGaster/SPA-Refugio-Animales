import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { Mascota } from '../mascota';

@Injectable({
  providedIn: 'root',
})
export class MascotaService {
  urlAPI: string = 'https://mascotas-5.free.beeceptor.com/todos';

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

  // async searchMascota(nommas: string): Promise<number> {
  //   try {
  //     await new Promise<void>((resolve, reject) => {
  //       this.retornar().subscribe({
  //         next: () => {
  //           this.successRequest(this);
  //           resolve();
  //         },
  //         error: (err) => {
  //           console.log(err);
  //           reject(err);
  //         },
  //       });
  //     });
  //     return this.arreglo.findIndex(p => p.nombre === nommas);
  //   } catch (error) {
  //     console.log(error);
  //     return -1; 
  //   }
  // }
}
