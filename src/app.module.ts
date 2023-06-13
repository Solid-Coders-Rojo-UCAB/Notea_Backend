import { Module } from '@nestjs/common';
import { DatabaseModule } from './db/db.module';
import { UsuarioModule } from './Usuario/Infraestructura/usuario.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotaModule } from './Nota/Infraestructura/nota.module';

@Module({
  imports: [DatabaseModule, NotaModule, UsuarioModule], //aca debemos importar todos los modulos que vayamos creando
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
