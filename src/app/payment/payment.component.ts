import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  ProductName: string;
  ProductDescription: string;
  EmployeName: string;
  TimeReq: number;
  Qty: number;
  Price: string;
  Amount: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {ProductName: 'Product Name' , ProductDescription: 'Product Description', EmployeName: '-', TimeReq: 0, Qty: 1, Price: '$ 250', Amount: '$ 250.00'},
  {ProductName: 'Product Name' , ProductDescription: 'Product Description', EmployeName: '-', TimeReq: 0, Qty: 1, Price: '$ 250', Amount: '$ 250.00'},
  {ProductName: 'Product Name' , ProductDescription: 'Product Description', EmployeName: '-', TimeReq: 0, Qty: 1, Price: '$ 250', Amount: '$ 250.00'},
  {ProductName: 'Product Name' , ProductDescription: 'Product Description', EmployeName: '-', TimeReq: 0, Qty: 1, Price: '$ 250', Amount: '$ 250.00'},
  {ProductName: 'Product Name' , ProductDescription: 'Product Description', EmployeName: '-', TimeReq: 0, Qty: 1, Price: '$ 250', Amount: '$ 250.00'},
];

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  displayedColumns = ['ProductName', 'ProductDescription', 'EmployeName', 'TimeReq', 'Qty', 'Price', 'Amount'];
  dataSource = ELEMENT_DATA;
  value = 'Clear me';
  constructor() { }

  ngOnInit(): void {
  }

}
