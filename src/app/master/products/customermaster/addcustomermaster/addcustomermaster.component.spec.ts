import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcustomermasterComponent } from './addcustomermaster.component';

describe('AddcustomermasterComponent', () => {
  let component: AddcustomermasterComponent;
  let fixture: ComponentFixture<AddcustomermasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcustomermasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcustomermasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
