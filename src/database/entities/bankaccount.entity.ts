import {Entity, PrimaryGeneratedColumn, Column,ManyToOne, OneToMany, JoinColumn} from "typeorm";
import { CustomerEntity } from "./customer.entity";
import { TransactionEntity } from "./transaction.entity";

@Entity('bankaccounts')
export class bankaccountEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Description: string;

    @Column()
    OpenDate: Date;

    @Column()
    Code: number;

    @Column()
    CardNumber: string;

    @Column()
    PIN: string;

    

    @ManyToOne(() => CustomerEntity, customer => customer.bankaccounts)
    customer:CustomerEntity;

    
    @OneToMany(() => TransactionEntity, transaction => transaction.bankaccount)
    transactions:TransactionEntity[];
}
