import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileGraphBarChartComponent } from './file-graph-bar-chart/file-graph-bar-chart.component';
import { FileGraphsComponent } from './file-graphs/file-graphs.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';

const routes: Routes = [
  { path: 'fileUpload', component: FileUploaderComponent},
  { path: 'lineChartAnalysis', component: FileGraphsComponent},
  { path: 'BarChartAnalysis', component: FileGraphBarChartComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
