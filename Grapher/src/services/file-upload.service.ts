import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs/internal/observable/throwError';


@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http: HttpClient,) { }

  public postFile(fileToUpload: File,url): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.http.post(url,formData).pipe(
      catchError(this.handleError),
    );;
  }

  public handleError(error: HttpErrorResponse){
    console.log("Error found ",error);
    return throwError(error);
  }

}
