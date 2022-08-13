import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayRangeComponent } from './two-way-range.component';

describe('TwoWayRangeComponent', () => {
  let component: TwoWayRangeComponent;
  let fixture: ComponentFixture<TwoWayRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayRangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
