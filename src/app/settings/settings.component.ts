import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  Type: string;
  Action: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {Type: 'PrintArtBill' , Action: 'Delete'},
  {Type: 'PrintArtWord' , Action: 'Delete'},
  {Type: 'Cmp_Scaleitem' , Action: 'Delete'},
];
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  displayedColumns = ['Type', 'Action'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }
  public Flag:Boolean=false;
  public ToggelOpen():void{
    this.Flag=!this.Flag

  }

}
