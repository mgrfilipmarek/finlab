import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Payment } from '../data/payment';
import { PAYMENTS } from '../mock/mock-payments';
import {MessageService} from "../messages/message.service";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private messageService:MessageService) { }

  getPayments(): Observable<Payment[]>{
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(PAYMENTS);
  }
}
