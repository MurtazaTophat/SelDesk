import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

export interface PeriodicElement {
  CmKey: number; 
  CmCode: string;
  CmName: string;
  Gender: string;
  Email: string;
  Mobile: String;
  Discount: String;
  CreditLimit: string;
  Action: String;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {CmKey: 1, CmCode: '-', CmName: '-', Gender: '-', CreditLimit: '-',Email: '-', Mobile:'-', Discount: '-', Action:'Edit'},
];
@Component({
  selector: 'app-customermaster',
  templateUrl: './customermaster.component.html',
  styleUrls: ['./customermaster.component.scss']
})
export class CustomermasterComponent implements OnInit {
  displayedColumns = ['CmKey', 'CmCode', 'CmName', 'Gender', 'CreditLimit', 'Email', 'Mobile', 'Discount', 'Action'];
  // dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
