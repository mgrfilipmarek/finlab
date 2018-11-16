import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Account} from "../data/account";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private accountUrl = 'http://localhost:8080/finlab/api/account';

  constructor(private http : HttpClient) { }

  getAccountAll(): Observable<Account[]>{
    // return of(Account);
    return this.http.get<Account[]>(this.accountUrl + "/all");
  }
}
