import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('letters')
export default class Letter {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  remetente: string;

  @Column()
  destinatario: string;

  @Column()
  msg: string;
}

