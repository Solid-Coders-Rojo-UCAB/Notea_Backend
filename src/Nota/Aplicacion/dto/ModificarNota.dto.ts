export class ModificarNotaDto {
  id: string;
  titulo: string;
  fechaCreacion: Date;
  latitud?: number;
  longitud?: number;
  grupo: string;
  etiquetas?: string[];

  contenido: string;

  imagenes?: { nombre: string; buffer: Buffer; orden: number }[];
}
