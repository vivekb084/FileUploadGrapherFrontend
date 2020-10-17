import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileGraphPieComponent } from './file-graph-pie.component';

describe('FileGraphPieComponent', () => {
  let component: FileGraphPieComponent;
  let fixture: ComponentFixture<FileGraphPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileGraphPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileGraphPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
