import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcustomercategoryComponent } from './editcustomercategory.component';

describe('EditcustomercategoryComponent', () => {
  let component: EditcustomercategoryComponent;
  let fixture: ComponentFixture<EditcustomercategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcustomercategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcustomercategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
