import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../../services/file-upload.service';
import { uploadFile } from '../constant/ApiUrl';


@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit {

  public fileToUpload: File = null;
  public result:any = {};
  public erMessage:any = {}

  constructor(public fileUploadService:FileUploadService) { }

  ngOnInit(): void {
  }

  uploadFileToActivity() {
    this.erMessage= {};
    this.result = {}
    if(this.fileToUpload == null ){
      this.erMessage.message='Please Select File';
      return ;
    }
    this.fileUploadService.postFile(this.fileToUpload,uploadFile).subscribe(data => {
        this.result=data;
        console.log(this.result)
      }, error => {
        this.erMessage=error.error
        console.log(error);
      });
  }

  handleFileInput(files: FileList) {
    this.erMessage= {};
    this.result = {};
    this.fileToUpload = files.item(0);
}

}
