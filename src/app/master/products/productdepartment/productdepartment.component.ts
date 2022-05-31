import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

export interface PeriodicElement {
  PrKey: number; 
  PrCode: string;
  PrName: string;
  Action: String;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {PrKey: 1, PrCode: '019', PrName: 'Facial Packages-01', Action:'Edit'},
];

@Component({
  selector: 'app-productdepartment',
  templateUrl: './productdepartment.component.html',
  styleUrls: ['./productdepartment.component.scss']
})
export class ProductdepartmentComponent implements OnInit {
  displayedColumns = ['PrKey', 'PrCode', 'PrName', 'Action'];
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
