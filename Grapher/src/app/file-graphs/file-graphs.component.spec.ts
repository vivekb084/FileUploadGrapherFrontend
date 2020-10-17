import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileGraphsComponent } from './file-graphs.component';

describe('FileGraphsComponent', () => {
  let component: FileGraphsComponent;
  let fixture: ComponentFixture<FileGraphsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileGraphsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
