import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcustomercategoryComponent } from './addcustomercategory.component';

describe('AddcustomercategoryComponent', () => {
  let component: AddcustomercategoryComponent;
  let fixture: ComponentFixture<AddcustomercategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcustomercategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcustomercategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
