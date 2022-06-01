import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditproductcategoryComponent } from './editproductcategory.component';

describe('EditproductcategoryComponent', () => {
  let component: EditproductcategoryComponent;
  let fixture: ComponentFixture<EditproductcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditproductcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditproductcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
