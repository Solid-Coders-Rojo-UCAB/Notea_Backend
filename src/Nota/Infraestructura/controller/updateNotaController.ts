import { Body, Controller, Inject, Post,Get,Delete, Param,Patch, Res, UseInterceptors, UploadedFile, UploadedFiles} from "@nestjs/common";
import { Either } from "src/Utils/Either";
import { ModificarNotaDto } from "src/Nota/Aplicacion/dto/ModificarNota.dto";
import { ModificarNotaService } from "src/Nota/Aplicacion/ModificarNota.service";
import {  FilesInterceptor } from "@nestjs/platform-express/multer";
import { RepositorioNotaImp } from "../repository/RepositorioNotaImp";
import { ILoggerImplementation } from "src/Decorators/Infraestructura/ILoggerImplementation";
import { LoggerService } from "src/Decorators/Aplicacion/LoggerService";

@Controller('nota')
export class upadateNotaController {
    constructor(
        private logger: ILoggerImplementation,
        private updateNotaService : ModificarNotaService,
        private repositorio: RepositorioNotaImp,
        ){
           this.logger = new ILoggerImplementation();
           this.updateNotaService =  new ModificarNotaService(this.repositorio);
        };


    @Patch()
    @UseInterceptors(FilesInterceptor('imagenes', 5))
    async update(@Res() response, @Body() notaMod: ModificarNotaDto, @UploadedFiles() files: Express.Multer.File[]): Promise<Either<string,Error>> {

        // if (files) {            
        //     if (files.length != 0) {
        //         const imagenes = files.map((file) => {
        //             return {
        //                 nombre: file.originalname,
        //                 buffer: file.buffer,
        //             }
        //         });
        //         notaMod.imagenes = imagenes; // se le asigna las imagenes al dto nota, para que el servicio las guarde
        //     }                               //ya que las imagenes se pasan por separado del dto
        // }
        
        const decorator = new LoggerService<ModificarNotaDto,string>(this.logger,this.updateNotaService,"Modificar Nota Service: La nota de id: " + notaMod.id + " ha sido modificada");
        const n =  await decorator.execute(notaMod)
        if (n.isLeft()) {
            return response.status(200).json(n.getLeft());
        }
        else {
            return response.status(404).json(n.getRight().message);
        }
    }
}