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
  {PrKey: 1, PrCode: '-', PrName: '-', Action:'Edit'},
];
@Component({
  selector: 'app-shiftpool',
  templateUrl: './shiftpool.component.html',
  styleUrls: ['./shiftpool.component.scss']
})
export class ShiftpoolComponent implements OnInit {
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
