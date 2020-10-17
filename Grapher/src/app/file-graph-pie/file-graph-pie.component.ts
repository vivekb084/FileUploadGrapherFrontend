import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../../services/file-upload.service';
import Chart from 'chart.js'
import { getCityWiseData, getFileData, getPaymentWiseData, getProductWiseData, getStateWiseData } from '../constant/ApiUrl';


@Component({
  selector: 'app-file-graph-pie',
  templateUrl: './file-graph-pie.component.html',
  styleUrls: ['./file-graph-pie.component.css']
})
export class FileGraphPieComponent implements OnInit {

  public erMessage:any = {}
  public PieChartCityWise = [];  
  public PieChartStateWise = [];  
  public PieChartProducteWise = [];  
  public PieChartPaymentWise = [];  
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
        this.createPieChartCityWise(this.cityWiseResult)
      }, error => {
        this.erMessage=error.error
        console.log(error);
      });
  }
  

  public createPieChartCityWise(cityData){
    this.PieChartCityWise = new Chart('canvas1', {
      type: 'pie',
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
        this.createPieChartStateWise(this.stateWiseResult)
      }, error => {
        this.erMessage=error.error
        console.log(error);
      });
  }
        
  public createPieChartStateWise(stateData){
    this.PieChartStateWise = new Chart('canvas2', {
      type: 'pie',
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
        this.createPieChartProductWise(this.productWiseResult)
      }, error => {
        this.erMessage=error.error
        console.log(error);
      });
  }

  public createPieChartProductWise(productData){
    this.PieChartProducteWise = new Chart('canvas3', {
      type: 'pie',
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
          display: true
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
        this.createPieChartPaymentWise(this.paymentWiseResult)
      }, error => {
        this.erMessage=error.error
        console.log(error);
      });
  }

  public createPieChartPaymentWise(paymentData){
    this.PieChartPaymentWise = new Chart('canvas4', {
      type: 'pie',
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
          display: true
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
