import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddnewproductComponent } from './addnewproduct/addnewproduct.component'; 
import { EditproductComponent } from './editproduct/editproduct.component'; 

export interface PeriodicElement {
  PrKey: number; 
  PrCode: string;
  PrName: string;
  Description: string;
  Department: string;
  Category: String;
  Type: String;
  Price: string;
  Action: String;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {PrKey: 1, PrCode: '019', PrName: 'Facial Packages-01', Description: 'Facial Packages-01', Price: '$250.00',Department: 'Cosmetics', Category:'Bath', Type: 'Classes/Training', Action:'Edit'},
];
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  displayedColumns = ['PrKey', 'PrCode', 'PrName', 'Description', 'Price', 'Department', 'Category', 'Type', 'Action'];
  // dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  addNewProductDialog(){
    this.dialog.open(AddnewproductComponent,{
      width: '700px'
    })
  }
  editProductDialog(){
    this.dialog.open(EditproductComponent,{
      width: '700px'
    })
  }

}
