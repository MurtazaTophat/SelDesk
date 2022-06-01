import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditusermasterComponent } from './editusermaster.component';

describe('EditusermasterComponent', () => {
  let component: EditusermasterComponent;
  let fixture: ComponentFixture<EditusermasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditusermasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditusermasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
