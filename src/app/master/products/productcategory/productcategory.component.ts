import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddproductcategoryComponent } from './addproductcategory/addproductcategory.component';
import { EditproductcategoryComponent } from './editproductcategory/editproductcategory.component';

export interface PeriodicElement {
  PrKey: number; 
  PrCode: string;
  PrName: string;
  Department: string;
  Action: String;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {PrKey: 1, PrCode: '019', PrName: 'Facial Packages-01', Department: 'Cosmetics', Action:'Edit'},
];
@Component({
  selector: 'app-productcategory',
  templateUrl: './productcategory.component.html',
  styleUrls: ['./productcategory.component.scss']
})
export class ProductcategoryComponent implements OnInit {
  displayedColumns = ['PrKey', 'PrCode', 'PrName', 'Department','Action'];
  // dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  addProductCategoryDialog(){
    this.dialog.open(AddproductcategoryComponent,{
      width: '700px'
    })
  }
  editProductCategoryDialog(){
    this.dialog.open(EditproductcategoryComponent,{
      width: '700px'
    })
  }

}
