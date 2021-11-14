import { Entity,Column,PrimaryGeneratedColumn ,ManyToOne, OneToMany,JoinColumn  } from "typeorm";
import { CurrencyEntity } from "./currency.entity";
import { atmEntity } from "./atm.entity";
import { bankaccountEntity } from "./bankaccount.entity";
@Entity('transactions')
export class TransactionEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Description: string;
    
    @Column()
    TransactionDate: Date;
    
    @Column()
    Amount: number;

    @Column()
    InOut: string;


    @ManyToOne(() => CurrencyEntity, currency =>  currency.transactions) 
    currency: CurrencyEntity;
    
    @ManyToOne(() => atmEntity, atm => atm.transactions) 
    atm: atmEntity;
    
    @ManyToOne(() => bankaccountEntity, bankaccount => bankaccount.transactions) 
    bankaccount: bankaccountEntity;

}

