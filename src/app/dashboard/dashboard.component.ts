import { Component, Input, OnInit } from '@angular/core';
import { transactions, firstFiveTransactions } from '../transactions/transactions.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit{
  ngOnInit(): void {
    console.log(this.firstFiveTransactions);
    
  }
  
  @Input() firstFiveTransactions: transactions[];
  @Input() deleteTransaction;
  
  constructor() { }
}

