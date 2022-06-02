import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingComponent } from './billing/billing.component';
import { ReportsComponent } from './reports/reports.component';
import { ProductsComponent } from './master/products/products.component';
import { CustomerComponent } from './master/customer/customer.component';
import { OthersComponent } from './master/others/others.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {path: '', component: ReportsComponent},
  {path: 'billing', component: BillingComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'others', component: OthersComponent},
  {path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
