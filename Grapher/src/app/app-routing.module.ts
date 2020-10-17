import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileGraphsComponent } from './file-graphs/file-graphs.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';

const routes: Routes = [
  { path: 'fileUpload', component: FileUploaderComponent},
  { path: 'getFile', component: FileGraphsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
