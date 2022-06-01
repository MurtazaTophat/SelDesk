import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcustomermasterComponent } from './editcustomermaster.component';

describe('EditcustomermasterComponent', () => {
  let component: EditcustomermasterComponent;
  let fixture: ComponentFixture<EditcustomermasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcustomermasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcustomermasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
