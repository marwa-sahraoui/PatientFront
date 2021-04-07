import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiabetreportComponent } from './diabetreport.component';

describe('DiabetreportComponent', () => {
  let component: DiabetreportComponent;
  let fixture: ComponentFixture<DiabetreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiabetreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiabetreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
