import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositCoinsComponent } from './deposit-coins/deposit-coins.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { DepositNotesComponent } from './deposit-notes/deposit-notes.component';
import { BalanceComponent } from './balance/balance.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path: "", redirectTo:"/balance", pathMatch: "full"},
  {path: "balance", component: BalanceComponent},
  {path: "deposit", component: DepositComponent,
  children:[
    {path: "notes", component: DepositNotesComponent},
    {path: "coins", component: DepositCoinsComponent}
  ]},
  {path: "withdraw", component: WithdrawComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
