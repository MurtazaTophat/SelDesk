import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproductdepartmentComponent } from './addproductdepartment.component';

describe('AddproductdepartmentComponent', () => {
  let component: AddproductdepartmentComponent;
  let fixture: ComponentFixture<AddproductdepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddproductdepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddproductdepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
