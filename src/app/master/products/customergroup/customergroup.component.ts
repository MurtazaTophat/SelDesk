import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

export interface PeriodicElement {
  Key: number; 
  Code: string;
  Name: string;
  Action: String;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {Key: 1, Code: '-', Name: '-', Action:'Edit'},
];
@Component({
  selector: 'app-customergroup',
  templateUrl: './customergroup.component.html',
  styleUrls: ['./customergroup.component.scss']
})
export class CustomergroupComponent implements OnInit {
  displayedColumns = ['Key', 'Code', 'Name', 'Action'];
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
