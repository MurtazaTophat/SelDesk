import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddemployeemasterComponent } from './addemployeemaster/addemployeemaster.component';
import { EditemployeemasterComponent } from './editemployeemaster/editemployeemaster.component';

export interface PeriodicElement {
  PrKey: number; 
  PrCode: string;
  PrName: string;
  Description: string;
  Department: string;
  Action: String;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {PrKey: 1, PrCode: '019', PrName: 'Facial Packages-01', Description: 'Facial Packages-01', Department: 'Cosmetics', Action:'Edit'},
];

@Component({
  selector: 'app-employeemaster',
  templateUrl: './employeemaster.component.html',
  styleUrls: ['./employeemaster.component.scss']
})
export class EmployeemasterComponent implements OnInit {
  displayedColumns = ['PrKey', 'PrCode', 'PrName', 'Description', 'Department', 'Action'];
  // dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addEmployeeMasterDialog(){
    this.dialog.open(AddemployeemasterComponent,{
      width: '700px'
    })
  }
  editEmployeeMasterDialog(){
    this.dialog.open(EditemployeemasterComponent,{
      width: '700px'
    })
  }
}
