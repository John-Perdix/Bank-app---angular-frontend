import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { faPaperPlane, faClockRotateLeft, faInbox, faRightToBracket, faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons';


export interface transactions {
  getTransactions(): unknown;
  id: string,
  name: string,
  account: string,
  description: string,
  amount: string,
  date: Date
}

export interface firstFiveTransactions {
  id: string,
  name: string,
  account: string,
  description: string,
  amount: string,
  date: Date
}

/* enum Status {
  Pending = 'Pending',
  Sent = 'Sent <fa-icon [icon]="faPaperPlane"></fa-icon>',
  Received = 'Received'
} */

export const Status = {
  Pending: {text: 'Pending', icon: ''},
  Sent: {text: 'Sent', icon: ''},
  Received: {text: 'Recived', icon: ''}
};

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})




export class TransactionsComponent implements OnInit {
  names = ['João', 'Bruno', 'Daniel', 'Vasco', 'Adriano Silveira', 'Magda Gonsalves', 'Cesária Resende', 'Cecília Azevedo', 'Jacinta Bento', 'Renata Dias', 'Jessica Braga', 'Cesária Resende', 'Rúben Branco', 'Osvaldo Magalhães', 'Ciríaco Sá', 'Artur Torres'];
  transactions: any[] = [];
  @Input() firstFiveTransactions: any[];
  descriptions = ['This transaction was made in a bussiness context', 'This was a personal transaction', 'This was a commercial transaction', 'This was a transaction for traveling porpuses'];
  sent="Sent <fa-icon [icon]='faPaperPlane'></fa-icon>";
  
  ngOnInit() {
    this.generateRandomTransactions();
  }


  //ICONS
  faPaperPlane = faPaperPlane;
  faClockRotateLeft = faClockRotateLeft;
  faInbox = faInbox;
  faRightToBracket = faRightToBracket;
  faMoneyBillTransfer = faMoneyBillTransfer;

  generateRandomTransactions() {
    for (let i = 0; i < 100; i++) {
      const index = i;
      const nameIndex = Math.floor(Math.random() * this.names.length);
      const descriptionIndex = Math.floor(Math.random() * this.descriptions.length);
      const randomStatusIndex = Math.floor(Math.random() * 3);
      const status = Object.values(Status)[randomStatusIndex];
      const transaction = {
        id: index,
        name: this.names[nameIndex],
        account: Math.floor(Math.random() * 1000000000000000000),
        description: this.descriptions[descriptionIndex],
        amount: Math.floor(Math.random() * 1000),
        date: new Date(Date.now() - Math.floor(Math.random() * 10000000000)),
        statusText: status.text,
        statusIcon: status.icon
      };
      this.transactions.push(transaction);
    }
    this.firstFiveTransactions = this.transactions.slice(0, 5);
  }

  deleteTransaction(id) {
    this.transactions.splice(id, 1);
    console.log(id);
    console.log('deleteTransaction was called');
  }

  pageSize = 5;
  currentPage = 1;


  //MODAL
  isVisible = false;
  isConfirmLoading = false;

  constructor() {}

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 1000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

}