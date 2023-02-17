import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { Payment3Component } from './payment3/payment3.component';
import { TermsComponent } from './terms/terms.component';


const routes: Routes = [
  {path: "", component: LoginComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: "dashboard", component: DashboardComponent},
  {path: "payment", component: Payment3Component},
  {path: "transactions", component: TransactionsComponent},
  {path: "terms", component: TermsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
