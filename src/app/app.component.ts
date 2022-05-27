import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewbookingComponent } from './newbooking/newbooking.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { OrdermoreComponent } from './ordermore/ordermore.component';
import { PaymentComponent } from './payment/payment.component';
import { QuicksaleComponent } from './quicksale/quicksale.component';

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
    this.dialog.open(PaymentComponent, {
      width: '1130px'
    });
  }
  newbookingDialog() {
    this.dialog.open(NewbookingComponent,{
      width: '1170px'
    });
  }
  quicksaleDialog() {
    this.dialog.open(QuicksaleComponent,{
      width: '1170px'
    });
  }
  ordermoreDialog() {
    this.dialog.open(OrdermoreComponent,{
      width: '1170px'
    });
  }
  orderlistDialog(){
    this.dialog.open(OrderlistComponent,{
      width: '1100px'
    })
  }
}
