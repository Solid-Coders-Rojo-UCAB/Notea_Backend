/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
  Res,
  Response,
} from '@nestjs/common';

import { CrearUsuarioDto, UpdateUsuarioDto } from '../../Aplicacion/dto/CrearUsuario.dto';
import { CrearUsuarioService } from 'src/Usuario/Aplicacion/CrearUsuario.service';
import { BuscarUsuariosService } from 'src/Usuario/Aplicacion/BuscarUsuarios.service';
import { EncontrarPorEmailService } from 'src/Usuario/Aplicacion/EncontrarPorEmail.service';
import { EncontrarPorIdService } from 'src/Usuario/Aplicacion/EncontrarPorId.service';
import { EliminarUsuarioService } from 'src/Usuario/Aplicacion/EliminarUsuario.service';
import { EditarUsuarioPO } from '../../Aplicacion/dto/editarUsuarioPO';
import { EditarUsuarioService } from 'src/Usuario/Aplicacion/EditarUsuario.service';
import { RepositorioNotaImp } from 'src/Nota/Infraestructura/repository/RepositorioNotaImp';

import { loguearUsuarioDTO } from 'src/Usuario/Aplicacion/dto/LoguearUsuario.dto';
import { LoguearUsuarioService } from 'src/Usuario/Aplicacion/LoguearUsuario.service';
import { RepositorioUsuario } from 'src/Usuario/Dominio/RepositorioUsuario';
import { EventPublisher } from 'src/core/domain/events/EventPublisher';
import { RepositorioUsuarioImp } from '../repository/RepositorioUsuarioImp';


@Controller('usuario')
export class UsuarioController {
  constructor(
    private usuarioService: CrearUsuarioService,
    private buscarUsuariosService: BuscarUsuariosService,
    private buscarUsuariosEmailService: EncontrarPorEmailService,
    private buscarUsuariosIdService: EncontrarPorIdService,
    private eliminarUsuarioService: EliminarUsuarioService,
    private loguearUsuarioService: LoguearUsuarioService,
    private editarUsuarioService: EditarUsuarioService,
    private repoUsuario: RepositorioUsuarioImp,
   // @Inject('RepositorioUsuario') private readonly repoUsuario: RepositorioUsuario,
    @Inject('EventPublisher') private readonly eventPublisher: EventPublisher,
  ) {
    this.usuarioService = new CrearUsuarioService(this.repoUsuario,eventPublisher);
    this.buscarUsuariosService =  new BuscarUsuariosService(this.repoUsuario);
    this.buscarUsuariosEmailService = new EncontrarPorEmailService(this.repoUsuario);
    this.buscarUsuariosIdService = new EncontrarPorIdService(this.repoUsuario);
    this.eliminarUsuarioService = new EliminarUsuarioService(this.repoUsuario);
    this.loguearUsuarioService = new LoguearUsuarioService(this.repoUsuario);
    this.editarUsuarioService = new EditarUsuarioService(this.repoUsuario);

  }

 /* @Post()
  async crearUsuario(@Res() response, @Body() payload: CrearUsuarioDto) {

    const email = await this.buscarUsuariosEmailService.execute(payload.email);

    if(email.isRight()){

      const respuesta = await this.usuarioService.execute(payload);

      if(respuesta.isLeft()){
        return response.status(200).json(respuesta.getLeft());
      }
      else{
        return response.status(404).json(respuesta.getRight().message);
      }
    } else {
      return response.status(404).json({message: 'El email ya existe'});
    }
  }*/

  //buscar todos los usuarios
  /*@Get('/all')
  async buscarUsuarios(@Res() response) {
    const respuesta = await this.buscarUsuariosService.execute();

    if(respuesta.isLeft()){
      return response.status(200).json(respuesta.getLeft());
    }
    else{
      return response.status(404).json(respuesta.getRight().message);
    }
  }*/
  //Buscar por email
  /*@Get('email/:email')
  async buscarUsuarioPorEmail(@Res() response, @Param('email') email: string) {
    const respuesta = await this.buscarUsuariosEmailService.execute(email)
  
    if(respuesta.isLeft()){
      return response.status(200).json(respuesta.getLeft());
    }
    else{
      return response.status(404).json(respuesta.getRight().message);
    }
  }*/
  //Buscar por id
  /*@Get('id/:id')
  async buscarUsuarioPorId(@Res() response, @Param('id') id: string) {
    const respuesta = await this.buscarUsuariosIdService.execute(id);

    if(respuesta.isLeft()){
      return response.status(200).json(respuesta.getLeft());
    }
    else{
      return response.status(404).json(respuesta.getRight().message);
    }
  }*/

 /* //Loguear usuario
  @Post('/login')
  async loguearUsuario(@Res() response, @Body() payload: loguearUsuarioDTO) {
    const respuesta = await this.loguearUsuarioService.execute(payload);

    if(respuesta.isLeft()){
      return response.status(200).json(respuesta.getLeft());
    }
    else{
      return response.status(404).json(respuesta.getRight().message);
    }
  }*/

 /* //Eliminar usuario
  @Delete(':id')
  async eliminarUsuario(@Res() response, @Param('id') id: string) {
    const respuesta = await this.eliminarUsuarioService.execute(id);

    if(respuesta.isLeft()){
      return response.status(200).json(respuesta.getLeft());
    }
    else{
      return response.status(404).json(respuesta.getRight().message);
    }
  }*/
  //Editar usuario
 /* @Put(':id')
  async editarUsuario(
    @Res() response,
    @Param('id') id: string,
    @Body() payload: UpdateUsuarioDto,
  ) {
    const editarPO = new EditarUsuarioPO();
    editarPO.id = id;
    editarPO.payload = payload;
    const respuesta = await this.editarUsuarioService.execute(editarPO);

    if(respuesta.isLeft()){
      return response.status(200).json(respuesta.getLeft());
    }
    else{
      return response.status(404).json(respuesta.getRight().message);
    }
  }*/
}
