import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerselectComponent } from './customerselect.component';

describe('CustomerselectComponent', () => {
  let component: CustomerselectComponent;
  let fixture: ComponentFixture<CustomerselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerselectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
