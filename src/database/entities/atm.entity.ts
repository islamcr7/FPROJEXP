import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany} from "typeorm";
import { TransactionEntity } from "./transaction.entity";

@Entity('atms')
export class atmEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    ATMCode: string;

    @Column()
    Description: string;

    @Column()
    Location: string;

    @Column()
    Active: boolean;

    

    @OneToMany(type => TransactionEntity, transaction => transaction.atm)
    transactions:TransactionEntity[];
}
