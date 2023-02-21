import { Component, InjectionToken, Injector, Input, OnInit } from '@angular/core';

import { TransactionsServiceService, firstFiveTransactions } from '../Services/transactions-service.service';
import { Injectable } from '@angular/core';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillTransfer, faMoneyBillTrendUp, faRightFromBracket, faEllipsis, faWallet, faHandHoldingDollar, faPiggyBank, faReceipt, faEuroSign, faBitcoinSign, faMoneyBill1Wave, faMapLocationDot, faVault } from '@fortawesome/free-solid-svg-icons';


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




export class DashboardComponent implements OnInit {
  firstFiveTransactions: any[];
  ngOnInit(): void {
    /* this.firstFiveTransactions = this.transactionsService.firstFiveTransactions; */
  }
  private transactionsServiceService: TransactionsServiceService

  source: InjectionToken<any>;
  //ICONS
  faChartLine = faChartLine;
  faMoneyBillTrendUp = faMoneyBillTrendUp;
  faRightFromBracket = faRightFromBracket;
  faMoneyBillTransfer = faMoneyBillTransfer;
  faEllipsis = faEllipsis;
  faWallet = faWallet;
  faHandHoldingDollar = faHandHoldingDollar;
  faPiggyBank = faPiggyBank;
  faReceipt = faReceipt;
  faEuroSign = faEuroSign;
  faBitcoinSign = faBitcoinSign;
  faMoneyBill1Wave = faMoneyBill1Wave;
  faMapLocationDot = faMapLocationDot;
  faVault = faVault;


  //POPOVER
  visible: boolean = false;
  visible1: boolean = false;
  visible2: boolean = false;
  visible3: boolean = false;
  visible4: boolean = false;
  

  clickMe(): void {
    this.visible = false;
    this.visible1 = false;
    this.visible2 = false;
    this.visible3 = false;
    this.visible4 = false;
  }

  change(value: boolean): void {
    console.log(value);
  }

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

  /* constructor(private transactionsServiceService: Injector) { } */
 /*  constructor(private transactionsService: TransactionsServiceService) { } */

 /* constructor(private transactionsService: TransactionsServiceService) { } */



}

