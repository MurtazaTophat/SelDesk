import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewbookingComponent } from './newbooking/newbooking.component';
import { PaymentComponent } from './payment/payment.component';
// New Biling Table
export interface PeriodicElement {
  ProductName: string;
  ProductDescription: string;
  EmployeName: string;
  TimeReq: number;
  Qty: number;
  Price: string;
  Amount: string;
  Action: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {ProductName: 'Product Name' , ProductDescription: 'Product Description', EmployeName: '-', TimeReq: 0, Qty: 1, Price: '$ 250', Amount: '$ 250.00', Action: 'Delete'},
  {ProductName: 'Product Name' , ProductDescription: 'Product Description', EmployeName: '-', TimeReq: 0, Qty: 1, Price: '$ 250', Amount: '$ 250.00', Action: 'Delete'},
  {ProductName: 'Product Name' , ProductDescription: 'Product Description', EmployeName: '-', TimeReq: 0, Qty: 1, Price: '$ 250', Amount: '$ 250.00', Action: 'Delete'},
  {ProductName: 'Product Name' , ProductDescription: 'Product Description', EmployeName: '-', TimeReq: 0, Qty: 1, Price: '$ 250', Amount: '$ 250.00', Action: 'Delete'},
  {ProductName: 'Product Name' , ProductDescription: 'Product Description', EmployeName: '-', TimeReq: 0, Qty: 1, Price: '$ 250', Amount: '$ 250.00', Action: 'Delete'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'SelDesk';
  displayedColumns = ['ProductName', 'ProductDescription', 'EmployeName', 'TimeReq', 'Qty', 'Price', 'Amount', 'Action'];
  dataSource = ELEMENT_DATA;
  value = 'Clear me';

  constructor(public dialog: MatDialog) {}

  paymentDialog() {
    this.dialog.open(PaymentComponent);
  }
  newbookingDialog() {
    this.dialog.open(NewbookingComponent);
  }
}
