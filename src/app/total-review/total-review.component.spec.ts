import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalReviewComponent } from './total-review.component';

describe('TotalReviewComponent', () => {
  let component: TotalReviewComponent;
  let fixture: ComponentFixture<TotalReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
