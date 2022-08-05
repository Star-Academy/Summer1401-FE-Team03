import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionSearchBoxComponent } from './expansion-search-box.component';

describe('ExpansionSearchBoxComponent', () => {
  let component: ExpansionSearchBoxComponent;
  let fixture: ComponentFixture<ExpansionSearchBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpansionSearchBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
