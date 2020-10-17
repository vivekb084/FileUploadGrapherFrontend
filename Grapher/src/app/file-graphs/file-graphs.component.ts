import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../../services/file-upload.service';
import { getCityWiseData, getFileData, getPaymentWiseData, getProductWiseData, getStateWiseData } from '../constant/ApiUrl';
import Chart from 'chart.js'
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-file-graphs',
  templateUrl: './file-graphs.component.html',
  styleUrls: ['./file-graphs.component.css']
})
export class FileGraphsComponent implements OnInit {

  public fileId:any = ''
  public result:any = {};
  public erMessage:any = {}
  public LinechartCityWise = [];  
  public LinechartStateWise = [];  
  public LinechartProducteWise = [];  
  public LinechartPaymentWise = [];  
  public cityWiseResult:any = []
  public stateWiseResult:any = []
  public productWiseResult:any = []
  public paymentWiseResult:any = []

  constructor(public fileUploadService:FileUploadService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.fileId = params['fileId'];  
      this.getCityWiseData();
      this.productWiseData()
      this.getStateWiseData();
      this.paymentWiseData()      
    });
  }

  // public getFileData() {
  //     this.fileUploadService.getData(getFileData,{params:{fileId:this.fileId}}).subscribe(data => {
  //         this.result=data;
  //       }, error => {
  //         this.erMessage=error.error
  //         console.log(error);
  //       });
  // }

  public getCityWiseData() {
    this.fileUploadService.getData(getCityWiseData,{params:{fileId:this.fileId}}).subscribe(result => {
        this.cityWiseResult=result.data;
        this.createLineChartCityWise(this.cityWiseResult)
      }, error => {
        this.erMessage=error.error
        console.log(error);
      });
  }
  

  public createLineChartCityWise(cityData){
    this.LinechartCityWise = new Chart('canvas1', {
      type: 'line',
      data: {
        labels: cityData.cityNameArray,
        datasets: [
          {
            data: cityData.userCountArray,
            borderColor: '#3cb371',
            backgroundColor: "#0000FF",
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
  
    });  

  }

  public getStateWiseData() {
    this.fileUploadService.getData(getStateWiseData,{params:{fileId:this.fileId}}).subscribe(result => {
        this.stateWiseResult=result.data;
        this.createLineChartStateWise(this.stateWiseResult)
      }, error => {
        this.erMessage=error.error
        console.log(error);
      });
  }
        
  public createLineChartStateWise(stateData){
    this.LinechartStateWise = new Chart('canvas2', {
      type: 'line',
      data: {
        labels: stateData.StateNameArray,
        datasets: [
          {
            data: stateData.userCountArray,
            borderColor: '#3cb371',
            backgroundColor: "#0000FF",
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
  
    });  

  }

  public productWiseData() {
    this.fileUploadService.getData(getProductWiseData,{params:{fileId:this.fileId}}).subscribe(result => {
        this.productWiseResult=result.data;
        this.createLineChartProductWise(this.productWiseResult)
      }, error => {
        this.erMessage=error.error
        console.log(error);
      });
  }

  public createLineChartProductWise(productData){
    this.LinechartProducteWise = new Chart('canvas3', {
      type: 'line',
      data: {
        labels: productData.ProductNameArray,
        datasets: [
          {
            data: productData.userCountArray,
            borderColor: '#3cb371',
            backgroundColor: "#0000FF",
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
  
    });  

  }


  public paymentWiseData() {
    this.fileUploadService.getData(getPaymentWiseData,{params:{fileId:this.fileId}}).subscribe(result => {
        this.paymentWiseResult=result.data;
        this.createLineChartPaymentWise(this.paymentWiseResult)
      }, error => {
        this.erMessage=error.error
        console.log(error);
      });
  }

  public createLineChartPaymentWise(paymentData){
    this.LinechartPaymentWise = new Chart('canvas4', {
      type: 'line',
      data: {
        labels: paymentData.PaymentTypeArray,
        datasets: [
          {
            data: paymentData.userCountArray,
            borderColor: '#3cb371',
            backgroundColor: "#0000FF",
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
  
    });  

  }

}
