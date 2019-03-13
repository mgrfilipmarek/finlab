import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../data/user";
import {Enumeration} from "../data/enumeration";

@Injectable({
  providedIn: 'root'
})
export class EnumerationService {

  private enumerationUrl = 'http://localhost:8080/finlab/api/enumeration';

  constructor(private http : HttpClient) { }

  getEnumerationAll(id: number): Observable<Enumeration[]>{
    return this.http.get<Enumeration[]>(this.enumerationUrl + "/all" + "?id=" + id);
  }
}
