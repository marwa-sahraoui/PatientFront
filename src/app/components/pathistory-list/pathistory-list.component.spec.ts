import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathistoryListComponent } from './pathistory-list.component';

describe('PathistoryListComponent', () => {
  let component: PathistoryListComponent;
  let fixture: ComponentFixture<PathistoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathistoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PathistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
