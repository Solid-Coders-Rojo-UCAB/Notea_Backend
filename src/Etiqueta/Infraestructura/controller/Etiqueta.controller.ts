import {
  Body,
  Controller,
  Inject,
  Post,
  Get,
  Delete,
  Put,
  Param,
  Res,
  Patch,
} from '@nestjs/common';
import { Either } from 'src/Utils/Either';
import { Etiqueta } from 'src/Etiqueta/Dominio/AgregadoEtiqueta';

import { crearEtiquetaService } from '../../Aplicacion/crearEtiqueta.service';
import { crearEtiquetaDto } from '../../Aplicacion/dto/crearEtiqueta.dto';

import { actualizarEtiquetaDto } from 'src/Etiqueta/Aplicacion/dto/actualizarEtiqueta.dto';
import { actualizarEtiquetaService } from 'src/Etiqueta/Aplicacion/actualizarEtiqueta.service';

import { buscarEtiquetasService } from 'src/Etiqueta/Aplicacion/buscarEtiquetas.service';
import { repositorioEtiquetaImp } from '../repository/repositorioEtiquetaImp';

@Controller('etiqueta')
export class EtiquetaController {
  constructor(
    @Inject(crearEtiquetaService)
    @Inject(actualizarEtiquetaService)
    @Inject(buscarEtiquetasService)
    private CrearEtiquetaService: crearEtiquetaService,
    private ActualizarEtiquetaService: actualizarEtiquetaService,
    private BuscarEtiquetasService: buscarEtiquetasService,
    private repositorio: repositorioEtiquetaImp,
  ) {
    this.CrearEtiquetaService = new crearEtiquetaService(this.repositorio);
    this.ActualizarEtiquetaService = new actualizarEtiquetaService(this.repositorio);
    this.BuscarEtiquetasService = new buscarEtiquetasService(this.repositorio);
  }

  @Get('/:idUsuario/all')
  async buscarEtiquetas(
    @Res() response,
    @Param('idUsuario') idUsuario: string,
  ): Promise<Either<Iterable<Etiqueta>, Error>> {
    const result = await this.BuscarEtiquetasService.execute(idUsuario);

    if (result.isLeft()) {
      return response.status(200).json(result.getLeft());
    } else {
      return response.status(404).json(result.getRight().message);
    }
  }
  @Post()
  async crearEtiqueta(
    @Res() response,
    @Body() etiqueta: crearEtiquetaDto,
  ): Promise<Either<Etiqueta, Error>> {
    const result = await this.CrearEtiquetaService.execute(etiqueta);

    if (result.isLeft()) {
      return response.status(200).json(result.getLeft());
    } else {
      return response.status(404).json(result.getRight().message);
    }
  }
  @Patch()
  async actualizarEtiqueta(
    @Res() response,
    @Body() notaMod: actualizarEtiquetaDto,
  ): Promise<Either<string, Error>> {
    const result = await this.ActualizarEtiquetaService.execute(notaMod);
    if (result.isLeft()) {
      return response.status(200).json(result.getLeft());
    } else {
      return response.status(404).json(result.getRight().message);
    }
  }
}
