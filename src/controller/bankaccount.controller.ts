import { Router, Response, Request } from "express";
import { bankaccountEntity } from "../database/entities/bankaccount.entity";
import { BankaccountService } from "../services/bankaccount.service"; // import service

export class BankaccountController {
  public router: Router;
  private BankaccountService: BankaccountService; 

  constructor(){
    this.BankaccountService = new BankaccountService(); 
    this.router = Router();
    this.routes();
  }

  public index = async (req: Request, res: Response) => {
    const Bankaccounts = await this.BankaccountService.index();
    res.send(Bankaccounts).json();
  } 

  public create = async (req: Request, res: Response) => {
    const Bankaccount = req['body'] as bankaccountEntity;
    const newBankaccount = await this.BankaccountService.create(Bankaccount);
    res.send(newBankaccount);
  }

  public update = async (req: Request, res: Response) => {
    const Bankaccount = req['body'] as bankaccountEntity;
    const id =  req['params']['id'];
    
    res.send(this.BankaccountService.update(Bankaccount, Number(id)));
  }

  public delete = async (req: Request, res: Response) => {
    const id =  req['params']['id'];
    res.send(this.BankaccountService.delete(Number(id)));
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