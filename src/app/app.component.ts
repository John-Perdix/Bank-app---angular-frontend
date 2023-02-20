import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TransactionsServiceService } from './Services/transactions-service.service';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillTransfer, faMoneyBillTrendUp} from '@fortawesome/free-solid-svg-icons';

export interface transactions {
  id: string,
  name: string,
  account: string,
  description: string,
  amount: string,
  date: Date
}


@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{

  firstFiveTransactions: transactions[] = [];
  searcher =  TransactionsServiceService;

  faChartLine=faChartLine;
  faMoneyBillTrendUp=faMoneyBillTrendUp;
  faMoneyBillTransfer=faMoneyBillTransfer;

  title = 'app';
}
