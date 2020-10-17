import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileGraphDoughnutChartComponent } from './file-graph-doughnut-chart.component';

describe('FileGraphDoughnutChartComponent', () => {
  let component: FileGraphDoughnutChartComponent;
  let fixture: ComponentFixture<FileGraphDoughnutChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileGraphDoughnutChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileGraphDoughnutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
