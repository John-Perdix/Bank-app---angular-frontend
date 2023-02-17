import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

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

  title = 'app';
}
