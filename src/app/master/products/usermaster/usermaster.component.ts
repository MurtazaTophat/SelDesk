import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddusermasterComponent } from './addusermaster/addusermaster.component';
import { EditusermasterComponent } from './editusermaster/editusermaster.component';

export interface PeriodicElement {
  PrKey: number; 
  PrName: string;
  Type: String;
  Action: String;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {PrKey: 1, PrName: '-', Type: '-', Action:'Edit'},
];
@Component({
  selector: 'app-usermaster',
  templateUrl: './usermaster.component.html',
  styleUrls: ['./usermaster.component.scss']
})
export class UsermasterComponent implements OnInit {
  displayedColumns = ['PrKey', 'PrName', 'Type', 'Action'];
  // dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  addUserMasterDialog(){
    this.dialog.open(AddusermasterComponent,{
      width: '700px'
    })
  }
  editUserMasterDialog(){
    this.dialog.open(EditusermasterComponent,{
      width: '700px'
    })
  }
}
