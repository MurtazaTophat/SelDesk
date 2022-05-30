import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ReportsprintComponent } from './reportsprint/reportsprint.component';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  public Flag:Boolean=false;
  public ToggelOpen():void{
    this.Flag=!this.Flag

  }
  
  reportsPrintDialog(){
    this.dialog.open(ReportsprintComponent,{
      width: '450px'
    })
  }
}
