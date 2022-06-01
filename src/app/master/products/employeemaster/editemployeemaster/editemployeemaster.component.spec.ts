import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditemployeemasterComponent } from './editemployeemaster.component';

describe('EditemployeemasterComponent', () => {
  let component: EditemployeemasterComponent;
  let fixture: ComponentFixture<EditemployeemasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditemployeemasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditemployeemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
