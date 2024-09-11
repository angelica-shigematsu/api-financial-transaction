import { TypeOperation } from "src/type/TypeOperation";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}