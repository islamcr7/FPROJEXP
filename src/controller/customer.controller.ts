import { Router, Response, Request } from "express";
import { CustomerEntity } from "../database/entities/customer.entity";
import { CustomerService } from "../services/customer.service"; // import service

export class CustomerController {
  public router: Router;
  private CustomerService: CustomerService; 

  constructor(){
    this.CustomerService = new CustomerService(); 
    this.router = Router();
    this.routes();
  }

  public index = async (req: Request, res: Response) => {
    const Customers = await this.CustomerService.index();
    res.send(Customers).json();
  } 

  public create = async (req: Request, res: Response) => {
    const Customer = req['body'] as CustomerEntity;
    const newCustomer = await this.CustomerService.create(Customer);
    res.send(newCustomer);
  }

  public update = async (req: Request, res: Response) => {
    const Customer = req['body'] as CustomerEntity;
    const id =  req['params']['id'];
    
    res.send(this.CustomerService.update(Customer, Number(id)));
  }

  public delete = async (req: Request, res: Response) => {
    const id =  req['params']['id'];
    res.send(this.CustomerService.delete(Number(id)));
  } 

  /****
   * Configure the routes of controller
   */
  public routes(){
    this.router.get('/', this.index);
    this.router.post('/', this.create);
    this.router.put('/:id', this.update);
    this.router.delete('/:id', this.delete);
  }
}