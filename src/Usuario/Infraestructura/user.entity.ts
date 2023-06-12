import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ type: 'date' })
  fechaNacimiento: Date;
}