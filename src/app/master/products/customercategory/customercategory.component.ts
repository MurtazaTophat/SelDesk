import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

export interface PeriodicElement {
  Key: number; 
  Code: string;
  Name: string;
  Group: string;
  Action: String;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {Key: 1, Code: '-', Name: '-', Group: '-', Action:'Edit'},
];
@Component({
  selector: 'app-customercategory',
  templateUrl: './customercategory.component.html',
  styleUrls: ['./customercategory.component.scss']
})
export class CustomercategoryComponent implements OnInit {
  displayedColumns = ['Key', 'Code', 'Name', 'Group', 'Action'];
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
