import { Component, OnInit} from '@angular/core';

import { Transaction, TransactionsOfType } from '../../services/transactions.model';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  transactions: Transaction[] = [];
  transactionsByType: TransactionsOfType[] = [];

  constructor(private transactionsService: TransactionsService) { }

  ngOnInit() {
    this.transactionsService.loadData().subscribe(transactions => {
      this.transactions = transactions;
      this.initTransactionsByType(this.getTypes());
    }, error => {
      console.log(`There was an error loading transactions: ${error}`);
    });
  }

  getTypes(): string[] {
    return [...new Set(this.transactions.map((transaction: Transaction) => transaction.type))];
  }

  initTransactionsByType(types: string[]): void {
    for (const type of types) {
      switch (type) {
        case 'income':
            this.transactionsByType[0] = {typeName: type, transactions: this.filterTransactionsByType(type)};
          break;
        case 'outcome':
            this.transactionsByType[1] = {typeName: type, transactions: this.filterTransactionsByType(type)};
          break;
        case 'loan':
            this.transactionsByType[2] = {typeName: type + 's', transactions: this.filterTransactionsByType(type)};
          break;
        case 'investment':
            this.transactionsByType[3] = {typeName: type + 's', transactions: this.filterTransactionsByType(type)};
          break;
        default:
          break;
      }
    }
  }

  filterTransactionsByType(type: string): Transaction[] {
    return this.transactions.filter((transaction: Transaction) => transaction.type === type);
  }

  calculateAmount(transactions: Transaction[]): number {
    return transactions.reduce((accumulator: number, transaction: Transaction) => accumulator + transaction.amount, 0);
  }

}
