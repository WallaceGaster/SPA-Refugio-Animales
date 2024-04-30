import { Mascota } from "../mascota";

export interface Cita { 
    FechaActual: string;
    Hora: string;
    Nombre: string;
    Correo: string;
    Telefono: number;
    Mascota: Mascota;
    FechaCita: Date;
}