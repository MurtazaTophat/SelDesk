import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddnewproductComponent } from '../addnewproduct/addnewproduct.component';
import { EditproductComponent } from '../editproduct/editproduct.component';

export interface PeriodicElement {
  Key: number; 
  Code: string;
  Name: string;
  Desc: string;
  Price: string;
  DeptName: string;
  GrpName: String;
  TypeName: String;
  Action: String;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {Key: 1, Code: '019', Name: 'Facial Packages-01', Desc: 'Facial Packages-01', Price: '$250.00',DeptName: 'Cosmetics', GrpName:'Bath', TypeName: 'Classes/Training', Action:'Edit'},
];
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  displayedColumns = ['Key', 'Code', 'Name', 'Desc', 'Price', 'DeptName', 'GrpName', 'TypeName', 'Action'];
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
