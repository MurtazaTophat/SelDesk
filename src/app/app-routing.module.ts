import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingComponent } from './billing/billing.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {path: '', component: ReportsComponent},
  {path: 'billing', component: BillingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
