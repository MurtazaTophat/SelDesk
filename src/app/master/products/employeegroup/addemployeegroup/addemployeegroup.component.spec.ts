import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddemployeegroupComponent } from './addemployeegroup.component';

describe('AddemployeegroupComponent', () => {
  let component: AddemployeegroupComponent;
  let fixture: ComponentFixture<AddemployeegroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddemployeegroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddemployeegroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
