import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileGraphBarChartComponent } from './file-graph-bar-chart.component';

describe('FileGraphBarChartComponent', () => {
  let component: FileGraphBarChartComponent;
  let fixture: ComponentFixture<FileGraphBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileGraphBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileGraphBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
