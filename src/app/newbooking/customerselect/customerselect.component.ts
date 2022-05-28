import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddnewcustomerComponent } from '../addnewcustomer/addnewcustomer.component';

export interface PeriodicElement {
  CustCode: string;
  CustName: string;
  Phone: string;
  Mobile: string;
  Action: String;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {CustCode: 'CCD102', CustName: 'First Customer Customer', Phone: '0731-123-4567', Mobile: '+91-123-4567-890',Action: 'Select'},
];

@Component({
  selector: 'app-customerselect',
  templateUrl: './customerselect.component.html',
  styleUrls: ['./customerselect.component.scss']
})
export class CustomerselectComponent implements OnInit {
  displayedColumns = ['CustCode', 'CustName', 'Phone', 'Mobile', 'Action'];
  // dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  addNewCustomerDialog(){
    this.dialog.open(AddnewcustomerComponent,{
      width: '700px'
    })
  }
}
