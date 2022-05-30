import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductlistComponent } from './productlist/productlist.component';

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

}
