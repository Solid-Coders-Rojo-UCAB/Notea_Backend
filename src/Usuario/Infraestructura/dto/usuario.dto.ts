import { IsString, IsNotEmpty, IsEmail, IsBoolean } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateUsuarioDto {

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  apellido: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  clave: string;

  @IsBoolean()
  @IsString()
  @ApiProperty()
  suscripcion: boolean;
}
export class UpdateCourseDto extends PartialType(CreateUsuarioDto) {}

// @MinLength(4)
// @MaxLength(16)