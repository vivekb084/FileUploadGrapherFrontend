import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public result:any = {};
  public erMessage:any = {}
  public submitFileData = ''
  public fileId:any = ''


  constructor() { }

  ngOnInit(): void {
  }

  public submitFileId(){
    this.submitFileData=this.fileId
    alert("File Id Added")
  }

}
