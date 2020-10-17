import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileGraphBarChartComponent } from './file-graph-bar-chart/file-graph-bar-chart.component';
import { FileGraphDoughnutChartComponent } from './file-graph-doughnut-chart/file-graph-doughnut-chart.component';
import { FileGraphPieComponent } from './file-graph-pie/file-graph-pie.component';
import { FileGraphsComponent } from './file-graphs/file-graphs.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';

const routes: Routes = [
  { path: 'fileUpload', component: FileUploaderComponent},
  { path: 'lineChartAnalysis', component: FileGraphsComponent},
  { path: 'BarChartAnalysis', component: FileGraphBarChartComponent},
  { path: 'PieChartAnalysis', component: FileGraphPieComponent},
  { path: 'DoughNutAnalysis', component: FileGraphDoughnutChartComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
