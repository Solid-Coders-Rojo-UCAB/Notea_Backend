import { error } from 'console';
import { colorEtiqueta } from './ValueObjectsEtiqueta/colorEtiqueta';
import { idEtiqueta } from './ValueObjectsEtiqueta/idEtiqueta';
import { nombreEtiqueta } from './ValueObjectsEtiqueta/nombreEtiqueta';
import { Optional } from 'src/Utils/opcional';

export class Etiqueta {
  private id: idEtiqueta;
  private nombre: nombreEtiqueta;
  private color: colorEtiqueta;

  private constructor(
    nombre: nombreEtiqueta,
    color: colorEtiqueta,
    id?: idEtiqueta,
  ) {
    this.id = id;
    this.nombre = nombre;
    this.color = color;
  }

  static crearEtiqueta(
    nombre: string,
    color: colorEtiqueta,
    id?: string,
  ): Etiqueta {
    return new Etiqueta(
      nombreEtiqueta.crearNombreEtiqueta(nombre),
      colorEtiqueta[color],
      idEtiqueta.crearIdEtiqueta(id)
    );
  }

  public getId(): string {
    return this.id.getValue();
  }

  public getNombre(): string {
    return this.nombre.getNombreEtiqueta();
  }

  public getColor(): string {
    return this.color.toString();
  }

  public setColor(color: colorEtiqueta): void {
    this.color = color;
  }

  public setNombre(nombre: nombreEtiqueta): void {
    this.nombre = nombre;
  }

  public setId(id: idEtiqueta): void {
    this.id = id;
  }
}