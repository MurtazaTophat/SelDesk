import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CompanymasterComponent } from './companymaster/companymaster.component';
import { CurrencyComponent } from './currency/currency.component';
import { CustomercategoryComponent } from './customercategory/customercategory.component';
import { CustomergroupComponent } from './customergroup/customergroup.component';
import { CustomermasterComponent } from './customermaster/customermaster.component';
import { EmployeegroupComponent } from './employeegroup/employeegroup.component';
import { EmployeemasterComponent } from './employeemaster/employeemaster.component';
import { EmployeetypeComponent } from './employeetype/employeetype.component';
import { NationalityComponent } from './nationality/nationality.component';
import { OfferComponent } from './offer/offer.component';
import { ProductcategoryComponent } from './productcategory/productcategory.component';
import { ProductdepartmentComponent } from './productdepartment/productdepartment.component';
import { ProductlistComponent } from './productmasterlist/productlist.component'; 
import { ProducttypeComponent } from './producttype/producttype.component';
import { ShiftpoolComponent } from './shiftpool/shiftpool.component';
import { TaxComponent } from './tax/tax.component';
import { TaxtypeComponent } from './taxtype/taxtype.component';
import { UsermasterComponent } from './usermaster/usermaster.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  public Flag:Boolean=false;
  public ToggelOpen():void{
    this.Flag=!this.Flag

  }
  productListDialog(){
    this.dialog.open(ProductlistComponent,{
      width: '1000px'
    })
  }
  productDepartmentDialog(){
    this.dialog.open(ProductdepartmentComponent,{
      width: '1000px'
    })
  }
  productCategoryDialog(){
    this.dialog.open(ProductcategoryComponent,{
      width: '1000px'
    })
  }
  productTypeDialog(){
    this.dialog.open(ProducttypeComponent,{
      width: '1000px'
    })
  }
  customerMasterDialog(){
    this.dialog.open(CustomermasterComponent,{
      width: '1000px'
    })
  }
  customerGroupDialog(){
    this.dialog.open(CustomergroupComponent,{
      width: '1000px'
    })
  }
  customerCategoryDialog(){
    this.dialog.open(CustomercategoryComponent,{
      width: '1000px'
    })
  }
  companyMasterDialog(){
    this.dialog.open(CompanymasterComponent,{
      width: '1000px'
    })
  }
  userMasterDialog(){
    this.dialog.open(UsermasterComponent,{
      width: '1000px'
    })
  }
  employeeMasterDialog(){
    this.dialog.open(EmployeemasterComponent,{
      width: '1000px'
    })
  }
  employeeGroupDialog(){
    this.dialog.open(EmployeegroupComponent,{
      width: '1000px'
    })
  }
  employeetypeDialog(){
    this.dialog.open(EmployeetypeComponent,{
      width: '1000px'
    })
  }
  nationalityDialog(){
    this.dialog.open(NationalityComponent,{
      width: '1000px'
    })
  }
  taxDialog(){
    this.dialog.open(TaxComponent,{
      width: '1000px'
    })
  }
  taxTypeDialog(){
    this.dialog.open(TaxtypeComponent,{
      width: '1000px'
    })
  }
  currencyDialog(){
    this.dialog.open(CurrencyComponent,{
      width: '1000px'
    })
  }
  shiftPoolDialog(){
    this.dialog.open(ShiftpoolComponent,{
      width: '1000px'
    })
  }
  offerDialog(){
    this.dialog.open(OfferComponent,{
      width: '1000px'
    })
  }

}
