import { getConnection } from 'typeorm';
import { bankaccountEntity } from '../database/entities/bankaccount.entity';
import { BankaccountRepository } from '../repository/bankaccount.repository';
//
export class BankaccountService {
  private BankaccountRepository: BankaccountRepository;

  constructor(){
    this.BankaccountRepository = getConnection("blog").getCustomRepository(BankaccountRepository);
  }

  public index = async () => {
    const Bankaccounts = await this.BankaccountRepository.find();
    return Bankaccounts;
  } 

  public create = async (Bankaccount: bankaccountEntity) => {
    const newBankaccount = await this.BankaccountRepository.save(Bankaccount);
    return newBankaccount;
  } 

  public update =  async(Bankaccount: bankaccountEntity, id: number) => {
    const updatedBankaccount = await this.BankaccountRepository.update(id, Bankaccount);
    return updatedBankaccount;
  } 

  public delete = async (id: number) => {
    const deletedBankaccount = await this.BankaccountRepository.delete(id);
    return deletedBankaccount;
  } 
}