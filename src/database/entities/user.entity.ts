import {Entity, PrimaryGeneratedColumn, Column,JoinColumn ,OneToOne} from "typeorm";
import { CustomerEntity } from "./customer.entity";

//models

@Entity('users')
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @OneToOne(type => CustomerEntity)
    @JoinColumn()
    customer:CustomerEntity;
}
