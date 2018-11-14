import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MessageService} from "../messages/message.service";
import {Observable} from "rxjs";
import {Payment} from "../data/payment";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private paymentsUrl = 'http://localhost:8080/finlab/api/account/all';

  constructor(private http : HttpClient,
              private messageService:MessageService) { }

  getPayments(): Observable<Payment[]>{
    // this.messageService.add('HeroService: fetched heroes');
    // return of(PAYMENTS);
    return this.http.get<Payment[]>(this.paymentsUrl);
  }
}
