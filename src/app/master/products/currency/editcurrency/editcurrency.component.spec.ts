import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcurrencyComponent } from './editcurrency.component';

describe('EditcurrencyComponent', () => {
  let component: EditcurrencyComponent;
  let fixture: ComponentFixture<EditcurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcurrencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
