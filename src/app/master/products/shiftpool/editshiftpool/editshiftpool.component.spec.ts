import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditshiftpoolComponent } from './editshiftpool.component';

describe('EditshiftpoolComponent', () => {
  let component: EditshiftpoolComponent;
  let fixture: ComponentFixture<EditshiftpoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditshiftpoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditshiftpoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
