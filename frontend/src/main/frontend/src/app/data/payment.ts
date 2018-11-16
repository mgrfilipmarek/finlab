import {User} from "./user";
import {Enumeration} from "./enumeration";

export class Payment {
  idPayment: number;
  amount: number;
  paymentTime: string;
  income: boolean;
  user:User;
  category:Enumeration;
}
