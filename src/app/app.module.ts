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
import { ProductlistComponent } from './master/products/productmasterlist/productlist.component';
import { AddnewproductComponent } from './master/products/productmasterlist/addnewproduct/addnewproduct.component';
import { EditproductComponent } from './master/products/productmasterlist/editproduct/editproduct.component';
import { ProductdepartmentComponent } from './master/products/productdepartment/productdepartment.component';
import { ProductcategoryComponent } from './master/products/productcategory/productcategory.component';
import { ProducttypeComponent } from './master/products/producttype/producttype.component';
import { CustomermasterComponent } from './master/products/customermaster/customermaster.component';
import { CustomergroupComponent } from './master/products/customergroup/customergroup.component';
import { CustomercategoryComponent } from './master/products/customercategory/customercategory.component';
import { CompanymasterComponent } from './master/products/companymaster/companymaster.component';
import { UsermasterComponent } from './master/products/usermaster/usermaster.component';
import { EmployeemasterComponent } from './master/products/employeemaster/employeemaster.component';
import { EmployeegroupComponent } from './master/products/employeegroup/employeegroup.component';
import { EmployeetypeComponent } from './master/products/employeetype/employeetype.component';
import { NationalityComponent } from './master/products/nationality/nationality.component';
import { TaxComponent } from './master/products/tax/tax.component';
import { TaxtypeComponent } from './master/products/taxtype/taxtype.component';
import { CurrencyComponent } from './master/products/currency/currency.component';
import { ShiftpoolComponent } from './master/products/shiftpool/shiftpool.component';
import { OfferComponent } from './master/products/offer/offer.component';



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
    EditproductComponent,
    ProductdepartmentComponent,
    ProductcategoryComponent,
    ProducttypeComponent,
    CustomermasterComponent,
    CustomergroupComponent,
    CustomercategoryComponent,
    CompanymasterComponent,
    UsermasterComponent,
    EmployeemasterComponent,
    EmployeegroupComponent,
    EmployeetypeComponent,
    NationalityComponent,
    TaxComponent,
    TaxtypeComponent,
    CurrencyComponent,
    ShiftpoolComponent,
    OfferComponent
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
