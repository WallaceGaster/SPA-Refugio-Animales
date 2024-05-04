import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  productos: any = [
    {
      marca: "ROYAL CANIN MEDIUM",
      denominacion: "Alimento para perros, Adulto MEDIUM a partir de los 12 meses de edad",
      paisPresentacion: "E.U.A / 2.72 kg",
      informacion: "Completa",
      recomendacionesAAFCO: "Cumple",
      analisis: "Cumple",
      grasa: "14.700", //Acortar a 1 decimal con Pipe
      proteina: "25.400", //Acortar a 1 decimal con Pipe
      costoKG: "146.69", //Agregar $ con Pipe
      pesoPerro: "22 kg", 
      costoRacion: "42.26" //Agregar $ con Pipe
    },
    {
      marca: "Hukanuba",
      denominacion: "Alimento Balanceado Completo para perros, Formulado para perros Adultos, (1+Años) de Raza Mediana",
      paisPresentacion: "E.U.A. / 2.27 kg",
      informacion: "Completa",
      recomendacionesAAFCO: "Cumple",
      analisis: "Cumple",
      grasa: "16.300",
      proteina: "24.900",
      costoKG: "136.12",
      pesoPerro: "22 kg",
      costoRacion: "29.95"
    },
    {
      marca: "ROYAL CANIN MAXI",
      denominacion: "Alimento para perros, Adulto MAXI a partir de los 15 meses de edad",
      paisPresentacion: "E.U.A. / 2.72 kg",
      informacion: "Completa",
      recomendacionesAAFCO: "Cumple",
      analisis: "Cumple",
      grasa: "17.100",
      proteina: "25.700",
      costoKG: "144.49",
      pesoPerro: "34 kg",
      costoRacion: "55.92"
    },
    {
      marca: "PRO PLAN PURINA",
      denominacion: "Alimento Completo para perros Adultos",
      paisPresentacion: "México / 1 kg",
      informacion: "Presenta leyenda mercadológica \"que a los perros de todos los tamaños les encanta\", que no se demuestra técnicamente",
      recomendacionesAAFCO: "Cumple",
      analisis: "No cumple con el contenido mínimo de proteína declarado",
      grasa: "15.800",
      proteina: "24.400",
      costoKG: "151",
      pesoPerro: "34 kg",
      costoRacion: "58.89"
    },
    {
      marca: "Prairie Nature's Varlety",
      denominacion: "Alimento Balanceado para perros de todas las etapas",
      paisPresentacion: "E.U.A. / 1 kg",
      informacion: "Presenta el término \"Holístico\", que no se demuestra técnicamente",
      recomendacionesAAFCO: "Cumple",
      analisis: "Cumple",
      grasa: "17.200",
      proteina: "25.400",
      costoKG: "99",
      pesoPerro: "34 kg",
      costoRacion: "39.81"
    }
  ];

  titulosLaterales: any = [
    {
      titulo1: "Marca"
    },
    {
      titulo2: "Denominación"
    },
    {
      titulo3: "País de origen / Presentación"
    },
    {
      titulo4: "Información comercial"
    },
    {
      titulo5: "Recomendaciones AAFCO (proteína, grasa, relación Ca:P)"
    },
    {
      titulo6: "Análisis garantizado"
    },
    {
      titulo7: "(%) Grasa 10.2%"
    },
    {
      titulo8: "(%) Proteína 10.5%"
    },
    {
      titulo9: "Costo por kg"
    },
    {
      titulo10: "Pero corporal perro kg"
    },
    {
      titulo11: "Costo por ración por día"
    }
  ];
}