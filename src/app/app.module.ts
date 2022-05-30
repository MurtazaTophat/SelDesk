import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatModule } from './mat/mat.module';
import { FormsModule } from '@angular/forms';
import { NewbookingComponent } from './newbooking/newbooking.component';
import { PaymentComponent } from './payment/payment.component';
import { QuicksaleComponent } from './quicksale/quicksale.component';
import { OrdermoreComponent } from './ordermore/ordermore.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { BillingComponent } from './billing/billing.component';
import { ReportsComponent } from './reports/reports.component';
import { ReportsprintComponent } from './reports/reportsprint/reportsprint.component';
import { AddnewcustomerComponent } from './newbooking/addnewcustomer/addnewcustomer.component';
import { CustomerselectComponent } from './newbooking/customerselect/customerselect.component';
import { MasterComponent } from './master/master.component';
import { ProductsComponent } from './master/products/products.component';
import { CustomerComponent } from './master/customer/customer.component';
import { OthersComponent } from './master/others/others.component';
import { ProductlistComponent } from './master/products/productlist/productlist.component';
import { AddnewproductComponent } from './master/products/addnewproduct/addnewproduct.component';
import { EditproductComponent } from './master/products/editproduct/editproduct.component';


@NgModule({
  declarations: [
    AppComponent,
    NewbookingComponent,
    PaymentComponent,
    QuicksaleComponent,
    OrdermoreComponent,
    OrderlistComponent,
    CustomerselectComponent,
    BillingComponent,
    ReportsComponent,
    ReportsprintComponent,
    AddnewcustomerComponent,
    MasterComponent,
    ProductsComponent,
    CustomerComponent,
    OthersComponent,
    ProductlistComponent,
    AddnewproductComponent,
    EditproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
