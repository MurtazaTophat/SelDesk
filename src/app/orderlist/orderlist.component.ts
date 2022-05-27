import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  HeadName: number;
  CustKey: number;
  CustCode: string;
  CustName: string;
  TransDate: string;
  AppointDate: string;
  TimeFrom: String;
  TimeTo: String;
  Action: String;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {HeadName: 10273, CustKey: 0, CustCode: '-', CustName: '-', TransDate: 'May 24, 2022', AppointDate: 'May 24, 2022', TimeFrom: '09:25 AM', TimeTo: '09:55 AM', Action: 'Select'},
  {HeadName: 10273, CustKey: 0, CustCode: '-', CustName: '-', TransDate: 'May 24, 2022', AppointDate: 'May 24, 2022', TimeFrom: '09:25 AM', TimeTo: '09:55 AM', Action: 'Select'},
  {HeadName: 10273, CustKey: 0, CustCode: '-', CustName: '-', TransDate: 'May 24, 2022', AppointDate: 'May 24, 2022', TimeFrom: '09:25 AM', TimeTo: '09:55 AM', Action: 'Select'},
  {HeadName: 10273, CustKey: 0, CustCode: '-', CustName: '-', TransDate: 'May 24, 2022', AppointDate: 'May 24, 2022', TimeFrom: '09:25 AM', TimeTo: '09:55 AM', Action: 'Select'},
  {HeadName: 10273, CustKey: 0, CustCode: '-', CustName: '-', TransDate: 'May 24, 2022', AppointDate: 'May 24, 2022', TimeFrom: '09:25 AM', TimeTo: '09:55 AM', Action: 'Select'},
  {HeadName: 10273, CustKey: 0, CustCode: '-', CustName: '-', TransDate: 'May 24, 2022', AppointDate: 'May 24, 2022', TimeFrom: '09:25 AM', TimeTo: '09:55 AM', Action: 'Select'},
];

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.scss']
})
export class OrderlistComponent implements OnInit {
  displayedColumns = ['HeadName', 'CustKey', 'CustCode', 'CustName', 'TransDate', 'AppointDate', 'TimeFrom', 'TimeTo', 'Action'];
  // dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
