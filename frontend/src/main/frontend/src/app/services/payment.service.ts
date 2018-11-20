import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Payment } from '../data/payment';
import {MessageService} from "../messages/message.service";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private paymentsUrl = 'http://localhost:8080/finlab/api/payment/all';

  constructor(private http : HttpClient,
              private messageService:MessageService) { }

  getPayments(): Observable<Payment[]>{
    // this.messageService.add('HeroService: fetched heroes');
    // return of(PAYMENTS);
    return this.http.get<Payment[]>(this.paymentsUrl);
  }
}
