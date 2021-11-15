import { EntityRepository, Repository } from "typeorm";
import { bankaccountEntity } from "../database/entities/bankaccount.entity";
//
@EntityRepository(bankaccountEntity)
export class BankaccountRepository extends Repository<bankaccountEntity> {

}