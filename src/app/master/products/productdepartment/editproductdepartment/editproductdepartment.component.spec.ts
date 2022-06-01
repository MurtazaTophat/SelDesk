import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditproductdepartmentComponent } from './editproductdepartment.component';

describe('EditproductdepartmentComponent', () => {
  let component: EditproductdepartmentComponent;
  let fixture: ComponentFixture<EditproductdepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditproductdepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditproductdepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
