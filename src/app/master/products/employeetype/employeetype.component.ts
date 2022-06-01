import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddemployeetypeComponent } from './addemployeetype/addemployeetype.component';
import { EditemployeetypeComponent } from './editemployeetype/editemployeetype.component';

export interface PeriodicElement {
  PrKey: number; 
  PrCode: string;
  PrName: string;
  Description: string;
  Action: String;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {PrKey: 1, PrCode: '019', PrName: 'Facial Packages-01', Description: 'Facial Packages-01', Action:'Edit'},
];

@Component({
  selector: 'app-employeetype',
  templateUrl: './employeetype.component.html',
  styleUrls: ['./employeetype.component.scss']
})
export class EmployeetypeComponent implements OnInit {
  displayedColumns = ['PrKey', 'PrCode', 'PrName', 'Description', 'Action'];
  // dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  addEmployeeTypeDialog(){
    this.dialog.open(AddemployeetypeComponent,{
      width: '700px'
    })
  }
  editEmployeeTypeDialog(){
    this.dialog.open(EditemployeetypeComponent,{
      width: '700px'
    })
  }
}
