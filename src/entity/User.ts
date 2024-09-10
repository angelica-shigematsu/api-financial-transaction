import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity() 

export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  active: boolean;

  @Column()
  accessUser: string;

  //saldo
  @Column()
  bankBalance: number;

}