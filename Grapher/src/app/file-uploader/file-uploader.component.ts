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

  constructor(public fileUploadService:FileUploadService) { }

  ngOnInit(): void {
  }

  uploadFileToActivity() {
    this.fileUploadService.postFile(this.fileToUpload,uploadFile).subscribe(data => {
      }, error => {
        console.log(error);
      });
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}

}
