import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtaxtypeComponent } from './addtaxtype.component';

describe('AddtaxtypeComponent', () => {
  let component: AddtaxtypeComponent;
  let fixture: ComponentFixture<AddtaxtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtaxtypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtaxtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
