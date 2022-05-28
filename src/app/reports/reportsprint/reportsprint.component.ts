import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  No: number;
  Name: string;
  Amount: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {No: 1 ,  Name: 'Cash Sales', Amount: '$0.00'},
  {No: 2 , Name: 'Card Sales', Amount: '$0.00'},
  {No: 3 , Name: 'Currency Sales', Amount: '$0.00'},
  {No: 4 , Name: 'Customer Sales', Amount: '$0.00'},
  {No: 5 , Name: 'Total Sales', Amount: '$0.00'},
];
@Component({
  selector: 'app-reportsprint',
  templateUrl: './reportsprint.component.html',
  styleUrls: ['./reportsprint.component.scss']
})
export class ReportsprintComponent implements OnInit {
  displayedColumns = ['No', 'Name', 'Amount'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
