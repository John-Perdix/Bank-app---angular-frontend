import { Component, InjectionToken, Injector, Input, OnInit } from '@angular/core';
import { transactions, firstFiveTransactions } from '../transactions/transactions.component';
import { Injectable } from '@angular/core';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillTransfer, faMoneyBillTrendUp, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';


export interface card {
  name: string,
  number: string,
  path: string,
}


@Injectable({
  providedIn: 'root',
})


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})




export class DashboardComponent implements OnInit{
  ngOnInit(): void {
    console.log(this.firstFiveTransactions);
    this.transactionsServiceService;
  }
  @Input()
  source: InjectionToken<any>;
  //ICONS
  faChartLine=faChartLine;
  faMoneyBillTrendUp=faMoneyBillTrendUp;
  faRightFromBracket=faRightFromBracket;
  faMoneyBillTransfer=faMoneyBillTransfer;

cards: card[] = [
  {
    name: 'Card 1',
    number: '1234 5678 9012 3456',
    path: '../../assets/../../assets/creditcard1.png'
  },
  {
    name: 'Card 2',
    number: '2345 6789 0123 4567',
    path: '../../assets/../../assets/creditcard2.png'
  }
];

  constructor(private transactionsServiceService: Injector) {}
  
  @Input() firstFiveTransactions: transactions[];
  @Input() deleteTransaction;
  
/*   constructor(
    private transactions: transactions
  ) {} */

 /*  transactions.generateRandomTransactions(); */
}

