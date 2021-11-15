import { Entity,Column,PrimaryGeneratedColumn , OneToMany,JoinColumn  } from "typeorm";
import { bankaccountEntity } from "./bankaccount.entity";
@Entity('customers')
//models
export class CustomerEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    surname: string;
    
    @Column()
    birthDate: Date;


    @OneToMany(() => bankaccountEntity, bankaccounts=> bankaccounts.customer) 
    bankaccounts: bankaccountEntity[];

}

