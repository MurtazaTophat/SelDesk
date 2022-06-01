import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddshiftpoolComponent } from './addshiftpool.component';

describe('AddshiftpoolComponent', () => {
  let component: AddshiftpoolComponent;
  let fixture: ComponentFixture<AddshiftpoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddshiftpoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddshiftpoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
