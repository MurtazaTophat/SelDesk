import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomerselectComponent } from './customerselect/customerselect.component';

export interface PeriodicElement {
  ProductName: string;
  ProductDescription: string;
  EmployeName: string;
  TimeReq: number;
  Qty: number;
  Price: string;
  Action: String;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {ProductName: 'Product Name' , ProductDescription: 'Product Description', EmployeName: '-', TimeReq: 0, Qty: 1, Price: '$ 250', Action: 'Delete'},
  {ProductName: 'Product Name' , ProductDescription: 'Product Description', EmployeName: '-', TimeReq: 0, Qty: 1, Price: '$ 250', Action: 'Delete'},
  {ProductName: 'Product Name' , ProductDescription: 'Product Description', EmployeName: '-', TimeReq: 0, Qty: 1, Price: '$ 250', Action: 'Delete'},
  {ProductName: 'Product Name' , ProductDescription: 'Product Description', EmployeName: '-', TimeReq: 0, Qty: 1, Price: '$ 250', Action: 'Delete'},
  {ProductName: 'Product Name' , ProductDescription: 'Product Description', EmployeName: '-', TimeReq: 0, Qty: 1, Price: '$ 250', Action: 'Delete'},
];

@Component({
  selector: 'app-newbooking',
  templateUrl: './newbooking.component.html',
  styleUrls: ['./newbooking.component.scss']
})
export class NewbookingComponent implements OnInit {
  displayedColumns = ['ProductName', 'ProductDescription', 'EmployeName', 'TimeReq', 'Qty', 'Price', 'Action'];
  dataSource = ELEMENT_DATA;
  value = 'Clear me'; 
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  customerselectDialog(){
    this.dialog.open(CustomerselectComponent,{
      width: '1000px'
    })
  }
}