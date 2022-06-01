import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddemployeetypeComponent } from './addemployeetype.component';

describe('AddemployeetypeComponent', () => {
  let component: AddemployeetypeComponent;
  let fixture: ComponentFixture<AddemployeetypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddemployeetypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddemployeetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
