import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseSettlementComponent } from './expense-settlement/expense-settlement.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ParticipantsComponent } from './participants/participants.component';

const routes: Routes = [
  { path: 'participants', component: ParticipantsComponent },
  { path: 'expenses', component: ExpensesComponent },
  { path: 'expense-settlement', component: ExpenseSettlementComponent },
  { path: '', redirectTo: '/participants', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
