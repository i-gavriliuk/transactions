import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Transaction } from './transactions.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private http: HttpClient) { }

  loadData(): Observable<Transaction[]>{
    return this.http.get<Transaction[]>('../../assets/mock-data.json');
  }
}
