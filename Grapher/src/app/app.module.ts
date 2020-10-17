import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { FileGraphsComponent } from './file-graphs/file-graphs.component';
import { FileGraphBarChartComponent } from './file-graph-bar-chart/file-graph-bar-chart.component';
import { FileGraphPieComponent } from './file-graph-pie/file-graph-pie.component';
import { FileGraphDoughnutChartComponent } from './file-graph-doughnut-chart/file-graph-doughnut-chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FileUploaderComponent,
    FileGraphsComponent,
    FileGraphBarChartComponent,
    FileGraphPieComponent,
    FileGraphDoughnutChartComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
