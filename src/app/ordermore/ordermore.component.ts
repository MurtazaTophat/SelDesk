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
  selector: 'app-ordermore',
  templateUrl: './ordermore.component.html',
  styleUrls: ['./ordermore.component.scss']
})
export class OrdermoreComponent implements OnInit {
  displayedColumns = ['ProductName', 'Qty', 'Price', 'Action'];
  dataSource = ELEMENT_DATA;
  
  constructor() { }

  ngOnInit(): void {
  }

}
