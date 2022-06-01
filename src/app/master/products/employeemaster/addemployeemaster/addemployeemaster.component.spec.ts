import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddemployeemasterComponent } from './addemployeemaster.component';

describe('AddemployeemasterComponent', () => {
  let component: AddemployeemasterComponent;
  let fixture: ComponentFixture<AddemployeemasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddemployeemasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddemployeemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
