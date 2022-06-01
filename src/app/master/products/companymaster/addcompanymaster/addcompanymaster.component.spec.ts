import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcompanymasterComponent } from './addcompanymaster.component';

describe('AddcompanymasterComponent', () => {
  let component: AddcompanymasterComponent;
  let fixture: ComponentFixture<AddcompanymasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcompanymasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcompanymasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
