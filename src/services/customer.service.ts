import { getConnection } from 'typeorm';
import { CustomerEntity } from '../database/entities/customer.entity';
import { CustomerRepository } from './../repository/customer.repository';
//
export class CustomerService {
  private CustomerRepository: CustomerRepository;

  constructor(){
    this.CustomerRepository = getConnection("blog").getCustomRepository(CustomerRepository);
  }

  public index = async () => {
    const Customers = await this.CustomerRepository.find()
    return Customers;
  } 

  public create = async (Customer: CustomerEntity) => {
    const newCustomer = await this.CustomerRepository.save(Customer);
    return newCustomer;
  } 

  public update =  async(Customer: CustomerEntity, id: number) => {
    const updatedCustomer = await this.CustomerRepository.update(id, Customer);
    return updatedCustomer;
  } 

  public delete = async (id: number) => {
    const deletedCustomer = await this.CustomerRepository.delete(id);
    return deletedCustomer;
  } 
}