import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Transaction } from "./Transaction";

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

  @OneToMany(() => Transaction, transaction => transaction.userId)
  transaction: Transaction[];
}