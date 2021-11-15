import express, {Request, Response} from 'express';
import { CustomerController } from './controller/customer.controller'; 
import { BankaccountController } from './controller/bankaccount.controller';
import { createConnection } from "typeorm";
//
class Server {
  private customerController: CustomerController;
  private bankaccountController:BankaccountController;
  private app: express.Application;

  constructor(){
    this.app = express(); // init the application
    this.configuration();
    this.routes();
  }

  /**
   * Method to configure the server,
   * If we didn't configure the port into the environment 
   * variables it takes the default port 3000
   */
  public configuration() {
    this.app.set('port', process.env.PORT || 3001);
    this.app.use(express.json());
  }

  /**
   * Method to configure the routes
   */
  public async routes(){
    await createConnection({
      type: "postgres",
      host: "127.0.0.1",
      port: 5433,
      username: "islam",
      password: "aaa",
      database: "NodeDB",
      entities: ["build/database/entities/**/*.js"],
      synchronize: true,
      name: "blog"
    });

    this.customerController = new CustomerController();
    this.bankaccountController = new BankaccountController();

    this.app.get( "/", (req: Request, res: Response ) => {
      res.send( "Hello world!" );
    });

    this.app.use(`/api/customers/`,this.customerController.router); 
    this.app.use(`/api/bankaccounts/`,this.bankaccountController.router); 
  }

  /**
   * Used to start the server
   */
  public start(){
    this.app.listen(this.app.get('port'), () => {
      console.log(`Server is listening ${this.app.get('port')} port.`);
    });
  }
}

const server = new Server(); // Create server instance
server.start(); // Execute the server
