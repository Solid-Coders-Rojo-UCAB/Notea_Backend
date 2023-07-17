/* eslint-disable prettier/prettier */

export class CrearNotaDto {
  titulo: string;
  fechaCreacion: Date;
  latitud?: number;
  longitud?: number;
  grupo: string;
  etiquetas?: string[];
  
  contenido: any;
 
  imagenes?: { nombre: string, buffer: Buffer, orden: number}[];
}
