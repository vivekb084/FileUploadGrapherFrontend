import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../../services/file-upload.service';
import Chart from 'chart.js'
import { getCityWiseData, getFileData, getPaymentWiseData, getProductWiseData, getStateWiseData } from '../constant/ApiUrl';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-file-graph-doughnut-chart',
  templateUrl: './file-graph-doughnut-chart.component.html',
  styleUrls: ['./file-graph-doughnut-chart.component.css']
})
export class FileGraphDoughnutChartComponent implements OnInit {

  public erMessage:any = {};
  public fileId:any = '';
  public DoughNutChartCityWise = [];  
  public DoughNutChartStateWise = [];  
  public DoughNutChartProducteWise = [];  
  public DoughNutChartPaymentWise = [];  
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

  public generateHexColor(count){
    let hexColorCodeArray = [];
    for(let i=0;i<count;i++){
      hexColorCodeArray.push( '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'))
    }
    return hexColorCodeArray
  }

  public getCityWiseData() {
    this.fileUploadService.getData(getCityWiseData,{params:{fileId:this.fileId}}).subscribe(result => {
        this.cityWiseResult=result.data;
        this.createDoughNutChartCityWise(this.cityWiseResult)
      }, error => {
        this.erMessage=error.error
        console.log(error);
      });
  }
  

  public createDoughNutChartCityWise(cityData){
    this.DoughNutChartCityWise = new Chart('canvas1', {
      type: 'doughnut',
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
    this.fileUploadService.getData(getStateWiseData,{params:{fileId:this.fileId}}).subscribe(result => {
        this.stateWiseResult=result.data;
        this.createDoughNutChartStateWise(this.stateWiseResult)
      }, error => {
        this.erMessage=error.error
        console.log(error);
      });
  }
        
  public createDoughNutChartStateWise(stateData){
    this.DoughNutChartStateWise = new Chart('canvas2', {
      type: 'doughnut',
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
    this.fileUploadService.getData(getProductWiseData,{params:{fileId:this.fileId}}).subscribe(result => {
        this.productWiseResult=result.data;
        this.createDoughNutChartProductWise(this.productWiseResult)
      }, error => {
        this.erMessage=error.error
        console.log(error);
      });
  }

  public createDoughNutChartProductWise(productData){
    this.DoughNutChartProducteWise = new Chart('canvas3', {
      type: 'doughnut',
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
    this.fileUploadService.getData(getPaymentWiseData,{params:{fileId:this.fileId}}).subscribe(result => {
        this.paymentWiseResult=result.data;
        this.createDoughNutChartPaymentWise(this.paymentWiseResult)
      }, error => {
        this.erMessage=error.error
        console.log(error);
      });
  }

  public createDoughNutChartPaymentWise(paymentData){
    this.DoughNutChartPaymentWise = new Chart('canvas4', {
      type: 'doughnut',
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
