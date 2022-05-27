import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdermoreComponent } from './ordermore.component';

describe('OrdermoreComponent', () => {
  let component: OrdermoreComponent;
  let fixture: ComponentFixture<OrdermoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdermoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdermoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
