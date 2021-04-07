import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathistoryDetailsComponent } from './pathistory-details.component';

describe('PathistoryDetailsComponent', () => {
  let component: PathistoryDetailsComponent;
  let fixture: ComponentFixture<PathistoryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathistoryDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PathistoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
