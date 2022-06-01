import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnationalityComponent } from './addnationality.component';

describe('AddnationalityComponent', () => {
  let component: AddnationalityComponent;
  let fixture: ComponentFixture<AddnationalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnationalityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnationalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
