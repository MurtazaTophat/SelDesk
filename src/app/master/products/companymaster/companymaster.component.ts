import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
export interface PeriodicElement {
  Code: number; 
  CompanyName: string;
  Address: string;
  Email: string;
  Phone: string;
  Tax: String;
  Action: String;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {Code: 1, CompanyName: 'Company Name', Address: 'Address', Email: 'admin@admin.com', Phone: '1234567890', Tax: '-', Action:'Edit'},
];

@Component({
  selector: 'app-companymaster',
  templateUrl: './companymaster.component.html',
  styleUrls: ['./companymaster.component.scss']
})
export class CompanymasterComponent implements OnInit {
  displayedColumns = ['Code', 'CompanyName', 'Address', 'Email', 'Phone', 'Tax', 'Action'];
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
