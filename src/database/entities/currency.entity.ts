import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany} from "typeorm";
import { TransactionEntity } from "./transaction.entity";
//models
@Entity('currencies')
export class CurrencyEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;
   

    @OneToMany(type => TransactionEntity, transaction => transaction.currency)
    transactions:TransactionEntity[];
}
