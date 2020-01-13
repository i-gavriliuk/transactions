import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingSummaryComponent } from './heading-summary.component';

describe('HeadingSummaryComponent', () => {
  let component: HeadingSummaryComponent;
  let fixture: ComponentFixture<HeadingSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadingSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
