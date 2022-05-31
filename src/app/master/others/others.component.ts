import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductlistComponent } from '../products/productmasterlist/productlist.component';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.scss']
})
export class OthersComponent implements OnInit {

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
