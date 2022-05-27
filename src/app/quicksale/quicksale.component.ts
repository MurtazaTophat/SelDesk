import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  ProductName: string;
  Qty: number;
  Price: string;
  Action: String;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {ProductName: 'Product Name', Qty: 1, Price: '$ 250', Action: 'Delete'},
  {ProductName: 'Product Name', Qty: 1, Price: '$ 250', Action: 'Delete'},
  {ProductName: 'Product Name', Qty: 1, Price: '$ 250', Action: 'Delete'},
  {ProductName: 'Product Name', Qty: 1, Price: '$ 250', Action: 'Delete'},
  {ProductName: 'Product Name', Qty: 1, Price: '$ 250', Action: 'Delete'},
];

@Component({
  selector: 'app-quicksale',
  templateUrl: './quicksale.component.html',
  styleUrls: ['./quicksale.component.scss']
})
export class QuicksaleComponent implements OnInit {
  displayedColumns = ['ProductName', 'Qty', 'Price', 'Action'];
  dataSource = ELEMENT_DATA;
  
  constructor() { }

  ngOnInit(): void {
  }

}
