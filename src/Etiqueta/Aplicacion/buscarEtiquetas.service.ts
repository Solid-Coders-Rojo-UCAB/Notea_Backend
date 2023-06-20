import { IAplicationService } from 'src/core/domain/appService/IAplicationService';
import { Either } from 'src/utils/Either';
import { Inject } from '@nestjs/common';

import { Etiqueta } from 'src/Etiqueta/dominio/AgregadoEtiqueta';
import { RepositorioEtiqueta } from 'src/Etiqueta/Dominio/RepositorioEtiqueta';

export class buscarEtiquetasService
  implements IAplicationService<null, Iterable<Etiqueta>>
{
  private readonly repositorioEtiqueta: RepositorioEtiqueta;

  constructor(
    @Inject('RepositorioEtiqueta')
    repositorioEtiq: RepositorioEtiqueta,
  ) {
    this.repositorioEtiqueta = repositorioEtiq;
  }

  async execute(s: null): Promise<Either<Iterable<Etiqueta>, Error>> {
    return await this.repositorioEtiqueta.buscarEtiquetas();
  }
}
