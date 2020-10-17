import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../../services/file-upload.service';
import Chart from 'chart.js'
import { getCityWiseData, getFileData, getPaymentWiseData, getProductWiseData, getStateWiseData } from '../constant/ApiUrl';


@Component({
  selector: 'app-file-graph-bar-chart',
  templateUrl: './file-graph-bar-chart.component.html',
  styleUrls: ['./file-graph-bar-chart.component.css']
})
export class FileGraphBarChartComponent implements OnInit {

  public erMessage:any = {}
  public BarChartCityWise = [];  
  public BarChartStateWise = [];  
  public BarChartProducteWise = [];  
  public BarChartPaymentWise = [];  
  public cityWiseResult:any = []
  public stateWiseResult:any = []
  public productWiseResult:any = []
  public paymentWiseResult:any = []

  constructor(public fileUploadService:FileUploadService) { }

  ngOnInit(): void {
    this.getCityWiseData();
    this.productWiseData()
    this.getStateWiseData();
    this.paymentWiseData()
  }

  public generateHexColor(count){
    let hexColorCodeArray = [];
    for(let i=0;i<count;i++){
      hexColorCodeArray.push( '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'))
    }
    return hexColorCodeArray
  }

  public getCityWiseData() {
    this.fileUploadService.getData(getCityWiseData,{params:{fileId:'5f8b041fdf1c18dc334fee94'}}).subscribe(result => {
        this.cityWiseResult=result.data;
        this.createBarChartCityWise(this.cityWiseResult)
      }, error => {
        this.erMessage=error.error
        console.log(error);
      });
  }
  

  public createBarChartCityWise(cityData){
    this.BarChartCityWise = new Chart('canvas1', {
      type: 'bar',
      data: {
        labels: cityData.cityNameArray,
        datasets: [
          {
            data: cityData.userCountArray,
            borderColor: '#3cb371',
            backgroundColor: this.generateHexColor(cityData.cityNameArray.length),
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
    this.fileUploadService.getData(getStateWiseData,{params:{fileId:'5f8b041fdf1c18dc334fee94'}}).subscribe(result => {
        this.stateWiseResult=result.data;
        this.createBarChartStateWise(this.stateWiseResult)
      }, error => {
        this.erMessage=error.error
        console.log(error);
      });
  }
        
  public createBarChartStateWise(stateData){
    this.BarChartStateWise = new Chart('canvas2', {
      type: 'bar',
      data: {
        labels: stateData.StateNameArray,
        datasets: [
          {
            data: stateData.userCountArray,
            borderColor: '#3cb371',
            backgroundColor: this.generateHexColor(stateData.StateNameArray.length),
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
    this.fileUploadService.getData(getProductWiseData,{params:{fileId:'5f8b041fdf1c18dc334fee94'}}).subscribe(result => {
        this.productWiseResult=result.data;
        this.createBarChartProductWise(this.productWiseResult)
      }, error => {
        this.erMessage=error.error
        console.log(error);
      });
  }

  public createBarChartProductWise(productData){
    this.BarChartProducteWise = new Chart('canvas3', {
      type: 'bar',
      data: {
        labels: productData.ProductNameArray,
        datasets: [
          {
            data: productData.userCountArray,
            borderColor: '#3cb371',
            backgroundColor: this.generateHexColor(productData.ProductNameArray.length),
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
    this.fileUploadService.getData(getPaymentWiseData,{params:{fileId:'5f8b041fdf1c18dc334fee94'}}).subscribe(result => {
        this.paymentWiseResult=result.data;
        this.createBarChartPaymentWise(this.paymentWiseResult)
      }, error => {
        this.erMessage=error.error
        console.log(error);
      });
  }

  public createBarChartPaymentWise(paymentData){
    this.BarChartPaymentWise = new Chart('canvas4', {
      type: 'bar',
      data: {
        labels: paymentData.PaymentTypeArray,
        datasets: [
          {
            data: paymentData.userCountArray,
            borderColor: '#3cb371',
            backgroundColor: this.generateHexColor(paymentData.PaymentTypeArray.length),
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
