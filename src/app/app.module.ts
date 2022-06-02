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
import { AddcompanymasterComponent } from './master/products/companymaster/addcompanymaster/addcompanymaster.component';
import { EditcompanymasterComponent } from './master/products/companymaster/editcompanymaster/editcompanymaster.component';
import { AddcurrencyComponent } from './master/products/currency/addcurrency/addcurrency.component';
import { EditcurrencyComponent } from './master/products/currency/editcurrency/editcurrency.component';
import { AddcustomercategoryComponent } from './master/products/customercategory/addcustomercategory/addcustomercategory.component';
import { EditcustomercategoryComponent } from './master/products/customercategory/editcustomercategory/editcustomercategory.component';
import { AddcustomergroupComponent } from './master/products/customergroup/addcustomergroup/addcustomergroup.component';
import { EditcustomergroupComponent } from './master/products/customergroup/editcustomergroup/editcustomergroup.component';
import { AddcustomermasterComponent } from './master/products/customermaster/addcustomermaster/addcustomermaster.component';
import { AddusermasterComponent } from './master/products/usermaster/addusermaster/addusermaster.component';
import { EditcustomermasterComponent } from './master/products/customermaster/editcustomermaster/editcustomermaster.component';
import { EditusermasterComponent } from './master/products/usermaster/editusermaster/editusermaster.component';
import { AddtaxtypeComponent } from './master/products/taxtype/addtaxtype/addtaxtype.component';
import { AddtaxComponent } from './master/products/tax/addtax/addtax.component';
import { AddshiftpoolComponent } from './master/products/shiftpool/addshiftpool/addshiftpool.component';
import { EdittaxtypeComponent } from './master/products/taxtype/edittaxtype/edittaxtype.component';
import { EditshiftpoolComponent } from './master/products/shiftpool/editshiftpool/editshiftpool.component';
import { EdittaxComponent } from './master/products/tax/edittax/edittax.component';
import { AddemployeegroupComponent } from './master/products/employeegroup/addemployeegroup/addemployeegroup.component';
import { EditemployeegroupComponent } from './master/products/employeegroup/editemployeegroup/editemployeegroup.component';
import { AddemployeemasterComponent } from './master/products/employeemaster/addemployeemaster/addemployeemaster.component';
import { AddofferComponent } from './master/products/offer/addoffer/addoffer.component';
import { EditemployeemasterComponent } from './master/products/employeemaster/editemployeemaster/editemployeemaster.component';
import { EditofferComponent } from './master/products/offer/editoffer/editoffer.component';
import { AddemployeetypeComponent } from './master/products/employeetype/addemployeetype/addemployeetype.component';
import { AddproductcategoryComponent } from './master/products/productcategory/addproductcategory/addproductcategory.component';
import { EditemployeetypeComponent } from './master/products/employeetype/editemployeetype/editemployeetype.component';
import { EditproductcategoryComponent } from './master/products/productcategory/editproductcategory/editproductcategory.component';
import { AddnationalityComponent } from './master/products/nationality/addnationality/addnationality.component';
import { AddproductdepartmentComponent } from './master/products/productdepartment/addproductdepartment/addproductdepartment.component';
import { EditnationalityComponent } from './master/products/nationality/editnationality/editnationality.component';
import { EditproductdepartmentComponent } from './master/products/productdepartment/editproductdepartment/editproductdepartment.component';
import { AddproducttypeComponent } from './master/products/producttype/addproducttype/addproducttype.component';
import { EditproducttypeComponent } from './master/products/producttype/editproducttype/editproducttype.component';
import { SettingsComponent } from './settings/settings.component';



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
    OfferComponent,
    AddcompanymasterComponent,
    EditcompanymasterComponent,
    AddcurrencyComponent,
    EditcurrencyComponent,
    AddcustomercategoryComponent,
    EditcustomercategoryComponent,
    AddcustomergroupComponent,
    EditcustomergroupComponent,
    AddcustomermasterComponent,
    AddusermasterComponent,
    EditcustomermasterComponent,
    EditusermasterComponent,
    AddtaxtypeComponent,
    AddtaxComponent,
    AddshiftpoolComponent,
    EdittaxtypeComponent,
    EditshiftpoolComponent,
    EdittaxComponent,
    AddemployeegroupComponent,
    EditemployeegroupComponent,
    AddemployeemasterComponent,
    AddofferComponent,
    EditemployeemasterComponent,
    EditofferComponent,
    AddemployeetypeComponent,
    AddproductcategoryComponent,
    EditemployeetypeComponent,
    EditproductcategoryComponent,
    AddnationalityComponent,
    AddproductdepartmentComponent,
    EditnationalityComponent,
    EditproductdepartmentComponent,
    AddproducttypeComponent,
    EditproducttypeComponent,
    SettingsComponent
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
