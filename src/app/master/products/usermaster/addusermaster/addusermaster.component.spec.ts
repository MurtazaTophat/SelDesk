import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddusermasterComponent } from './addusermaster.component';

describe('AddusermasterComponent', () => {
  let component: AddusermasterComponent;
  let fixture: ComponentFixture<AddusermasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddusermasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddusermasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
