import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddtaxComponent } from './addtax/addtax.component';
import { EdittaxComponent } from './edittax/edittax.component';

export interface PeriodicElement {
  PrKey: number; 
  PrCode: string;
  PrName: string;
  Description: string;
  Department: string;
  Action: String;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {PrKey: 1, PrCode: '-', PrName: '-', Description: '-', Department: '-', Action:'Edit'},
];
@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styleUrls: ['./tax.component.scss']
})
export class TaxComponent implements OnInit {
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

  addTaxDialog(){
    this.dialog.open(AddtaxComponent,{
      width: '700px'
    })
  }
  editTaxDialog(){
    this.dialog.open(EdittaxComponent,{
      width: '700px'
    })
  }

}
