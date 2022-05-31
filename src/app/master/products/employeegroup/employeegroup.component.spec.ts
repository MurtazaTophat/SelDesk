import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeegroupComponent } from './employeegroup.component';

describe('EmployeegroupComponent', () => {
  let component: EmployeegroupComponent;
  let fixture: ComponentFixture<EmployeegroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeegroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeegroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
