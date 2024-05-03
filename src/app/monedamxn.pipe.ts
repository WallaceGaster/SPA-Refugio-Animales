import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monedamxn',
  standalone: true
})
export class MonedamxnPipe implements PipeTransform {

  transform(moneda: string): string {
    let resultado = "$"+moneda+" MXN";

    return resultado;
  }

}