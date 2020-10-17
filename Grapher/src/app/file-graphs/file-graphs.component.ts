import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../../services/file-upload.service';
import { getFileData } from '../constant/ApiUrl';

@Component({
  selector: 'app-file-graphs',
  templateUrl: './file-graphs.component.html',
  styleUrls: ['./file-graphs.component.css']
})
export class FileGraphsComponent implements OnInit {

  public result:any = {};
  public erMessage:any = {}

  constructor(public fileUploadService:FileUploadService) { }

  ngOnInit(): void {
    this.getFileData()
  }

  public getFileData() {
      this.fileUploadService.getData(getFileData,{params:{fileId:'5f8b041fdf1c18dc334fee94'}}).subscribe(data => {
          this.result=data;
          console.log(this.result)
        }, error => {
          this.erMessage=error.error
          console.log(error);
        });
  }

}
