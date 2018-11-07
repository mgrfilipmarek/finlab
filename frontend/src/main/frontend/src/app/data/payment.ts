import {User} from "./user";

export class Payment {
  idPayment: number;
  amount: number;
  paymentTime: string;
  income: boolean;
  user:User;
}
