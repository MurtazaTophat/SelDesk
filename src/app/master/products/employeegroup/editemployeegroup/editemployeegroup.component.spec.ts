import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditemployeegroupComponent } from './editemployeegroup.component';

describe('EditemployeegroupComponent', () => {
  let component: EditemployeegroupComponent;
  let fixture: ComponentFixture<EditemployeegroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditemployeegroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditemployeegroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
