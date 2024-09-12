import { TypeOperation } from "src/type/TypeOperation";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity() 

export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  typeOperation: TypeOperation;

  @Column()
  date: Date;

  @Column()
  status: string;

  @Column()
  value: number;

  @ManyToOne(() => User, user => user.transaction)
  userId: number;
}