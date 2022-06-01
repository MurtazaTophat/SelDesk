import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddcurrencyComponent } from './addcurrency/addcurrency.component';
import { EditcurrencyComponent } from './editcurrency/editcurrency.component';
export interface PeriodicElement {
  Key: number; 
  Code: string;
  Name: string;
  Rate: string;
  Action: String;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {Key: 1, Code: '-', Name: '-', Rate: '-', Action:'Edit'},
];
@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
  displayedColumns = ['Key', 'Code', 'Name', 'Rate', 'Action'];
  // dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addCurrencyDialog(){
    this.dialog.open(AddcurrencyComponent ,{
      width: '700px'
    })
  }
  editCurrencyDialog(){
    this.dialog.open(EditcurrencyComponent,{
      width: '700px'
    })
  }

}
