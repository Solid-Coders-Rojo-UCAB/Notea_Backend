import { IsString } from 'class-validator';

export class ModificarNotaDto {
  id: string;
  @IsString()
  titulo?: string;
  @IsString()
  contenido?: string;
  @IsString()
  grupo: string;

  tareas?: { titulo: string; check: boolean; id: string }[];
  imagenes?: { nombre: string; buffer: Buffer }[];
}
