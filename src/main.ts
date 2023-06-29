import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configurar opciones de CORS
  const corsOptions: cors.CorsOptions = {
    // origin: 'http://localhost:9999', // Reemplaza con el origen de tu aplicación Flutter hay un problema
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  };

  app.use(cors(corsOptions));

  await app.listen(port);
}

bootstrap();
