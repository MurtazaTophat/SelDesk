import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomercategoryComponent } from './customercategory.component';

describe('CustomercategoryComponent', () => {
  let component: CustomercategoryComponent;
  let fixture: ComponentFixture<CustomercategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomercategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomercategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
