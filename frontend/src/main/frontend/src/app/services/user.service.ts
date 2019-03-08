import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Account} from "../data/account";
import {User} from "../data/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:8080/finlab/api/user';

  constructor(private http : HttpClient) { }

  getUserDetail(userName: string): Observable<User>{
    return this.http.get<User>(this.userUrl + "/detail" + "?username=" + userName);
  }
}
