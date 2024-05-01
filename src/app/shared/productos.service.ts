import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  alimentos: any = [
    {
      marca: "ROYAL CANIN MEDIUM",
      denominacion: "Alimento para perros, Adulto MEDIUM a partir de los 12 meses de edad",
      paisPresentacion: "E.U.A / 2.72 kg",
      informacion: "Completa",
      recomendacionesAAFCO: "Cumple",
      analisis: "Cumple",
      grasa: "14.7",
      proteina: "25.4",
      costoKG: "$146.69",
      pesoPerro: "22 kg",
      costoRacion: "$42.26"
    },
    {
      marca: "Hukanuba",
      denominacion: "Alimento Balanceado Completo para perros, Formulado para perros Adultos, (1+Años) de Raza Mediana",
      paisPresentacion: "E.U.A. / 2.27 kg",
      informacion: "Completa",
      recomendacionesAAFCO: "Cumple",
      analisis: "Cumple",
      grasa: "16.3",
      proteina: "24.9",
      costoKG: "$136.12",
      pesoPerro: "22 kg",
      costoRacion: "$29.95"
    },
    {
      marca: "ROYAL CANIN MAXI",
      denominacion: "Alimento para perros, Adulto MAXI a partir de los 15 meses de edad",
      paisPresentacion: "E.U.A. / 2.72 kg",
      informacion: "Completa",
      recomendacionesAAFCO: "Cumple",
      analisis: "Cumple",
      grasa: "17.1",
      proteina: "25.7",
      costoKG: "$144.49",
      pesoPerro: "34 kg",
      costoRacion: "$55.92"
    },
    {
      marca: "PRO PLAN PURINA",
      denominacion: "Alimento Completo para perros Adultos",
      paisPresentacion: "México / 1 kg",
      informacion: "Presenta leyenda mercadológica \"que a los perros de todos los tamaños les encanta\", que no se demuestra técnicamente",
      recomendacionesAAFCO: "Cumple",
      analisis: "No cumple con el contenido mínimo de proteína declarado",
      grasa: "15.8",
      proteina: "24.4",
      costoKG: "$151",
      pesoPerro: "34 kg",
      costoRacion: "$58.89"
    },
    {
      marca: "Prairie Nature's Varlety",
      denominacion: "Alimento Balanceado para perros de todas las etapas",
      paisPresentacion: "E.U.A. / 1 kg",
      informacion: "Presenta el término \"Holístico\", que no se demuestra técnicamente",
      recomendacionesAAFCO: "Cumple",
      analisis: "Cumple",
      grasa: "17.2",
      proteina: "25.4",
      costoKG: "$99",
      pesoPerro: "34 kg",
      costoRacion: "$39.81"
    }
  ]

  productos: any = [
    {
      titulo: "Denominación",
      marca1: "Alimento para perros, Adulto MEDIUM a partir de los 12 meses de edad",
      marca2: "Alimento Balanceado Completo para perros, Formulado para perros Adultos, (1+Años) de Raza Mediana",
      marca3: "Alimento para perros, Adulto MAXI a partir de los 15 meses de edad",
      marca4: "Alimento Completo para perros Adultos",
      marca5: "Alimento Balanceado para perros de todas las etapas"
    },
    {
      titulo: "País de origen / Presentación",
      marca1: "E.U.A / 2.72 kg",
      marca2: "E.U.A. / 2.27 kg",
      marca3: "E.U.A. / 2.72 kg",
      marca4: "México / 1 kg",
      marca5: "E.U.A. / 1 kg"
    },
    {
      titulo: "Información comercial", 
      marca1: "Completa",
      marca2: "Completa",
      marca3: "Completa",
      marca4: "Presenta leyenda mercadológica \"que a los perros de todos los tamaños les encanta\", que no se demuestra técnicamente",
      marca5: "Presenta el término \"Holístico\", que no se demuestra técnicamente"
    },
    {
      titulo: "Recomendaciones AAFCO (proteínas, grasa, relación Ca:P)", 
      marca1: "Cumple",
      marca2: "Cumple",
      marca3: "Cumple",
      marca4: "Cumple",
      marca5: "Cumple"
    },
    {
      titulo: "Análisis garantizado", 
      marca1: "Cumple",
      marca2: "Cumple",
      marca3: "Cumple",
      marca4: "No cumple con el contenido mínimo de proteína declarado",
      marca5: "Cumple"
    },
    {
      titulo: "(%) Grasa 10.2%",
      marca1: "14.7",
      marca2: "16.3",
      marca3: "17.1",
      marca4: "15.8",
      marca5: "17.2"
    },
    {
      titulo: "(%) Proteína 10.5%", 
      marca1: "25.4",
      marca2: "24.9",
      marca3: "25.7",
      marca4: "24.4",
      marca5: "25.4"
    },
    {
      titulo: "Costo por kg", 
      marca1: "$146.69",
      marca2: "$136.12",
      marca3: "$144.49",
      marca4: "$151",
      marca5: "$99"
    },
    {
      titulo: "Peso corporal perro kg ", 
      marca1: "22 kg",
      marca2: "22 kg",
      marca3: "34 kg",
      marca4: "34 kg",
      marca5: "34 kg"
    },
    {
      titulo: "Costo por ración por día", 
      marca1: "$42.26",
      marca2: "$29.95",
      marca3: "$58.89",
      marca4: "$55.92",
      marca5: "$39.81"
    }
  ]
}